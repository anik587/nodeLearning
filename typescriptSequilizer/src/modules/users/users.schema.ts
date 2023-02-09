/* eslint-disable @typescript-eslint/camelcase */
import { STRING, DATE, INTEGER, TINYINT } from 'sequelize';
import { MySql } from '../../utils';

const mysql = MySql.getInstance();
const sequelize = mysql.getSequalize();

export const UsersSchema = sequelize.define(
  'Users',
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: false,
    },
    ip_list: {
      type: STRING,
    },
    is_active: {
      type: TINYINT,
      allowNull: false,
    },
    created_at: {
      type: DATE,
    },
    updated_at: {
      type: DATE,
    },
  },
  {
    timestamps: false,
  },
);

const HIDDEN_ATTRIBUTES = ['password', 'created_at', 'updated_at'];

UsersSchema.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }

  return values;
};

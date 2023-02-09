/* eslint-disable @typescript-eslint/camelcase */
import { STRING, DATE, INTEGER, TINYINT } from 'sequelize';
import { MySql } from '../../utils';
import { UsersSchema } from '../users/users.schema';
const mysql = MySql.getInstance();
const sequelize = mysql.getSequalize();

export const ChannelsSchema = sequelize.define(
  'Channels',
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
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

ChannelsSchema.belongsTo(UsersSchema, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

const HIDDEN_ATTRIBUTES = ['created_at', 'updated_at'];

ChannelsSchema.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }
  return values;
};

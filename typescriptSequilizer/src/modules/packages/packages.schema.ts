/* eslint-disable @typescript-eslint/camelcase */
import { STRING, DATE, INTEGER, TINYINT } from 'sequelize';
import { MySql } from '../../utils';

const mysql = MySql.getInstance();
const sequelize = mysql.getSequalize();

export const PackagesSchema = sequelize.define(
  'Packages',
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // original_id: {
    //   type: INTEGER,
    //   allowNull: false,
    // },
    device_type: {
      type: STRING,
      allowNull: false,
    },
    payment_mode: {
      type: STRING,
      allowNull: false,
    },
    auto_renewal: {
      type: STRING,
      allowNull: false,
    },
    is_corporate: {
      type: STRING,
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    no_of_validity_days: {
      type: STRING,
      allowNull: false,
    },
    charge_amount: {
      type: STRING,
      allowNull: false,
    },
    display_amount: {
      type: STRING,
      allowNull: false,
    },
    data_pack_name: {
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

const HIDDEN_ATTRIBUTES = ['created_at', 'updated_at'];

PackagesSchema.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }
  return values;
};

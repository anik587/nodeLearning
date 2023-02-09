/* eslint-disable @typescript-eslint/camelcase */
import { DATE, INTEGER, TINYINT } from 'sequelize';
import { MySql } from '../../utils';
import { ChannelsSchema } from '../channels/channels.schema';
import { PackagesSchema } from '../packages/packages.schema';
const mysql = MySql.getInstance();
const sequelize = mysql.getSequalize();

export const ChannelPackagesSchema = sequelize.define(
  'Channel_package',
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    channels_id: {
      type: INTEGER,
      allowNull: false,
    },
    packages_id: {
      type: INTEGER,
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
    freezeTableName: true,
    timestamps: false,
  },
);

ChannelPackagesSchema.belongsTo(ChannelsSchema, {
  foreignKey: 'channels_id',
  onDelete: 'CASCADE',
});

ChannelPackagesSchema.belongsTo(PackagesSchema, {
  foreignKey: 'packages_id',
  onDelete: 'CASCADE',
});

const HIDDEN_ATTRIBUTES = ['created_at', 'updated_at'];

ChannelPackagesSchema.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }
  return values;
};

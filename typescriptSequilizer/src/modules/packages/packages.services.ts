/* eslint-disable @typescript-eslint/camelcase */
import { Package } from '../../interfaces';
import { PackagesSchema as Schema } from './packages.schema';
import axios from 'axios';
import { Op } from 'sequelize';

/**
 * Users service that handles user related operations
 */
export class PackagesService {
  /**
   * function to return channel by provided id.
   * @param {string} id - id to get channel
   * @return {Promise<Package>} returns channel if any
   */
  public async getById(id: number): Promise<Package> {
    try {
      const result = await Schema.findOne({
        where: {
          id: id,
        },
      });
      return result.get();
    } catch (e) {
      throw e;
    }
  }

  /**
   * function to return all channel.
   * @return {Promise<Package>} returns channel if any
   */
  public async getAll(): Promise<any[]> {
    try {
      return await Schema.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * function to return channel by provided id.
   
   * @return {Promise<Package>} returns all synced packages 
   */
  public async syncBingePackages(): Promise<any> {
    try {
      // let resp = await axios.get(thirdPartyUtils.binge.baseUrl + thirdPartyUtils.binge.packageSyncApiUrl);
      const resp = await axios.get('http://localhost:3002/packages');
      const packages = resp.data;

      const result = await Schema.bulkCreate(packages, {
        updateOnDuplicate: [
          'device_type',
          'title',
          'payment_mode',
          'auto_renewal',
          'is_corporate',
          'no_of_validity_days',
          'display_amount',
          'data_pack_name',
          'is_active',
        ],
      });

      const upsertIds = result.map(elm => elm.get().id);

      await Schema.destroy({
        where: {
          id: {
            [Op.notIn]: upsertIds,
          },
        },
      });

      return 'all package synched';
    } catch (e) {
      //console.log(e)
      throw e;
    }
  }
}

/* eslint-disable @typescript-eslint/camelcase */
import { Package } from '../../interfaces';
import { ChannelPackagesSchema as Schema } from './channelpackages.schema';
import { ChannelsSchema, PackagesSchema } from '../';
/**
 * Users service that handles user related operations
 */
export class ChannelPackagesService {
  /**
   * Create channel
   * @param {Package} channel - channel object
   * @return {Promise<User>} - newly created channel
   */
  public async create(channelpackages: Package): Promise<Package> {
    const currentTime = new Date();
    try {
      const result = await Schema.create({
        ...channelpackages,
        is_active: 1,
        created_at: currentTime,
        updated_at: currentTime,
      });
      return result.get();
    } catch (e) {
      throw e;
    }
  }

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
        include: [
          {
            model: ChannelsSchema,
            required: false,
          },
          {
            model: PackagesSchema,
            required: false,
          },
        ],
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
      const result = await Schema.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        include: [
          {
            model: ChannelsSchema,
            required: false,
          },
          {
            model: PackagesSchema,
            required: false,
          },
        ],
      });
      return result;
    } catch (e) {
      throw e;
    }
  }

  public async update(channelpackages: Package, id: number): Promise<any> {
    try {
      const currentTime = new Date();
      const updatedUser = await Schema.update(
        {
          ...channelpackages,
          updated_at: currentTime,
        },
        { where: { id: id } },
      );

      if (!updatedUser) {
        throw new Error();
      }
      return { name: name, id: id };
    } catch (e) {
      throw e;
    }
  }

  public async destroy(id: number): Promise<any> {
    try {
      const deleted = await Schema.destroy({
        where: { id: id },
      });

      if (!deleted) {
        throw new Error();
      }
      return deleted;
    } catch (e) {
      throw e;
    }
  }
}

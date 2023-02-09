/* eslint-disable @typescript-eslint/camelcase */
import { Channel } from '../../interfaces';
import { ChannelsSchema as Schema } from './';
import { UsersSchema } from '../users/users.schema';
/**
 * Users service that handles user related operations
 */
export class ChannelsService {
  /**
   * Create channel
   * @param {Channel} channel - channel object
   * @return {Promise<User>} - newly created channel
   */
  public async create(channel: Channel): Promise<Channel> {
    const currentTime = new Date();
    try {
      const result = await Schema.create({
        ...channel,
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
   * @return {Promise<Channel>} returns channel if any
   */
  public async getById(id: number): Promise<Channel> {
    try {
      const result = await Schema.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: UsersSchema,
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
   * @return {Promise<Channel>} returns channel if any
   */
  public async getAll(): Promise<any[]> {
    try {
      const result = await Schema.findAll({
        attributes: { exclude: ['created_at', 'updated_at'] },
        include: [
          {
            model: UsersSchema,
            required: false,
          },
        ],
      });

      return result;
    } catch (e) {
      throw e;
    }
  }

  public async update(channel: Channel, id: number): Promise<any> {
    try {
      const updated = await Schema.update(
        {
          ...channel,
        },
        { where: { id: id } },
      );

      if (!updated) {
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

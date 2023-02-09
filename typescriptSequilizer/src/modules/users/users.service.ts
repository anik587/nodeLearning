/* eslint-disable @typescript-eslint/camelcase */

import { User } from '../../interfaces';
import { UsersSchema as Schema } from './';
import { hashPassword } from '../../utils';
/**
 * Users service that handles user related operations
 */
export class UsersService {
  public async getUsers(): Promise<any[]> {
    try {
      const readResult = await Schema.findAll({
        attributes: { exclude: ['password', 'created_at', 'updated_at'] },
      });
      return readResult;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Register a new user
   * @param {User} user - user object
   * @return {Promise<User>} - newly created user
   */
  public async create(user: User): Promise<User> {
    const currentTime = new Date();
    const hashedPassword = await hashPassword(user.password);

    try {
      const createResult = await Schema.create({
        ...user,
        password: hashedPassword,
        created_at: currentTime,
        updated_at: currentTime,
      });

      return createResult.toJSON();
    } catch (e) {
      throw e;
    }
  }

  private async findOrFail(idStr: string): Promise<any> {
    const id = parseInt(idStr, 10);

    if (!id) {
      throw new Error('Id should be an integer');
    }

    const result = await Schema.findOne({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new Error('No record found');
    }

    return result;
  }

  /**
   * function to return user by provided id.
   * @param {number} id - id to get user
   * @return {Promise<User>} returns User if any
   */
  public async getById(userId: string): Promise<User> {
    try {
      const record = await this.findOrFail(userId);

      return (await record).get();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Function to update an existing user by provided id.
   * @param {string} id - id to update an existing user
   * @return {Promise<any>} returns User if update is successful
   */
  public async update(user: User, userId: string): Promise<any> {
    try {
      const record = await this.findOrFail(userId);
      // const currentTime = new Date();
      if (user.password) {
        user.password = await hashPassword(user.password);
      }

      (await record).update(user);

      return record;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  /**
   * Function to delete an existing user by provided id.
   * @param {string} id - id to delete an existing user
   * @return {Promise<any>} returns User if deletion is successful
   */
  public async delete(userId: string): Promise<any> {
    try {
      const record = await this.findOrFail(userId);

      const deletedUser = (await record).destroy();

      return deletedUser;
    } catch (e) {
      throw e;
    }
  }
}

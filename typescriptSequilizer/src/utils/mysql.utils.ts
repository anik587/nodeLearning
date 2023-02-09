import { Sequelize } from 'sequelize';
import { config } from '../../config';

/**
 * MySql class
 */
class MySql {
  private static instance: MySql;
  private sequelize: Sequelize;
  private dbUserName: string = config.db.username;
  private password: string = config.db.password;
  private host: string = config.db.host;
  private port: number = config.db.port;
  private dbName: string = config.db.dbName;

  constructor() {
    this.createDBInstance();
  }

  createDBInstance() {
    this.sequelize = new Sequelize(this.dbName, this.dbUserName, this.password, {
      host: this.host,
      port: this.port,
      dialect: 'mysql',
      timezone: '+06:00',
      define: {
        timestamps: false,
        underscored: true,
      },
      dialectOptions: {
        dateStrings: true,
        typeCast: true,
        timezone: '+06:00',
      },
    });
  }

  static getInstance(): MySql {
    if (!MySql.instance) {
      MySql.instance = new MySql();
    }
    return MySql.instance;
  }

  async checkDBConnection() {
    try {
      await this.sequelize.authenticate();
      console.log('Mysql Connection has been established successfully.');
    } catch (error) {
      console.error('Mysql Connection interrupted:', error);
    }
  }

  getSequalize() {
    return this.sequelize;
  }
}

export { MySql };

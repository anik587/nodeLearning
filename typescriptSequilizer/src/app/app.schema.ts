import { Sequelize } from 'sequelize';
import { MySql } from '../utils';
const mysql = MySql.getInstance();
const sequelize = mysql.getSequalize();
const db = {};
import { userSchema } from '../modules/users/users.schema';
import { channelsSchema } from '../modules/channels/channels.schema';

db['Users'] = userSchema(sequelize);
db['Channels'] = channelsSchema(sequelize);
console.log(userSchema);
Object.keys(db).forEach(modelName => {
  console.log(db[modelName].associate);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

export const UsersModel = db['Users'];
export const ChannelsModel = db['Channels'];

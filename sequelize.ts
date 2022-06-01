// declare var require: any;

require('dotenv').config();
import {Sequelize} from 'sequelize-typescript'

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DATABASE_HOST || "localhost",
  database: process.env.DATABASE_NAME || 'root',
  username: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_PASSWORD || "password",
  models: [__dirname + '/src/models']
});

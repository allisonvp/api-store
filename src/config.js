const { config } = require('dotenv');

config();

const dbCredentials = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  acquireConnectionTimeout: 10000,
};

module.exports = dbCredentials;

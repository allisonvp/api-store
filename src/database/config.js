const { config } = require('dotenv');

//config read the environment variables from the .env file and assign it to process.env
config();

//Database credentials that will be the argument of the knex function.
const dbCredentials = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = dbCredentials;

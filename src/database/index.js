const knex = require('knex');
const dbCredentials = require('../config');

const connection = knex(dbCredentials);

const getConnection = () => {
  return connection;
};

module.exports = getConnection;

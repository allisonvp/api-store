const knex = require('knex');
const dbCredentials = require('./config');

//Using knex module as an as an SQL query builder
const connection = knex(dbCredentials);

module.exports = connection;

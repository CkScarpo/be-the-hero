const  knex = require('knex');
const configuration = require('../../knexfile');

//usando conexão de DEV
const connection = knex(configuration.development);

module.exports = connection;

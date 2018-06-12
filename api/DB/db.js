var mysql = require('mysql');

var knex = module.exports = require('knex')({
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    debug    :  true
});

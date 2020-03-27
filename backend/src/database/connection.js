const knex = require('knex')
const consfigsDatabase = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? consfigsDatabase.test : consfigsDatabase.development;
const connection = knex(config)

module.exports = connection;
const knex = require('knex')
const consfigsDatabase = require('../../knexfile')

const connection = knex(consfigsDatabase.development)

module.exports = connection;
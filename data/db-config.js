const knex = require("knex");
const knexConfig = require("../knexfile");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);






// const knex = require("knex");
// const config = require("../knexfile");

// const { NODE_ENV } = require("../config/index");

// module.exports = knex(config[NODE_ENV]);
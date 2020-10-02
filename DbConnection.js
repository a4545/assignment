const Knex  = require("knex");
const db = new Knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Aditya4200",
    database: "digitroons",
  }
})
module.exports = db
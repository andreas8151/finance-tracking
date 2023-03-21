const mysql = require("mysql");

//env
require("dotenv").config();

const host = process.env.host;
const user = process.env.user;
const password = process.env.password;
const database = process.env.database;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

module.exports = connection;

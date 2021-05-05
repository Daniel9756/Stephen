
const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: "root",
  password:  process.env.DATABASE_PASSWORD || "ROOT",
  database:  process.env.DATABASE,
});
 con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database connected");
});




module.exports = con






let certs = null;

const isDev = process.env.NODE_ENV === "development";
// const isTest = process.env.NODE_ENV === "test";

console.log("isDev :: ", isDev);

let dbconfig = {};

try {
  dbconfig = require('./config/db.config');
} catch(e) {
  console.error(e);
}

module.exports = {
  PORT: process.env.PORT || 8080,
  DEV: isDev,
  DATABASE: {
    // type: process.env.DB_TYPE,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    ...dbconfig, 
  }
}
let certs = null;

const isDev = process.env.NODE_ENV === "development";
// const isTest = process.env.NODE_ENV === "test";

console.log("isDev :: ", isDev);

module.exports = {
  PORT: process.env.PORT || 8080,
  DEV: isDev,
}
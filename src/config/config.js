require('dotenv').config();

const { HOSTNAME, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME } = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USER || "root",
    "password": MYSQL_PASSWORD || null,
    "database": MYSQL_DBNAME || "database",
    "host": HOSTNAME || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

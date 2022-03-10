require('dotenv').config();

const { HOSTNAME, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DBNAME } = process.env;

module.exports = {
  "development": {
    "username": "root" || MYSQL_USER,
    "password": null || MYSQL_PASSWORD,
    "database": "database_development" || MYSQL_DBNAME,
    "host": "127.0.0.1" || HOSTNAME,
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

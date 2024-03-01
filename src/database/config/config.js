require('dotenv').config({path:__dirname+'/./../../.env'});

module.exports = {
  "development": {
    "username": "root",
    "password": 'mp-451414',
    "database": "peak_database",
    "host": "localhost",
    "port": 3306,
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
};


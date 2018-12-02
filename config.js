require('dotenv').config({silent: true});

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'development',

  // Environment-dependent settings
  development: {
    db: {
      dialect:'postgres',
      host: 'ec2-50-16-218-45.compute-1.amazonaws.com',
      database: 'dbkriq3mslvv6f',
      user :'hosoecpjdvknnd',
      password :'Outg41YDXG5Bv_aPORUnI3U0dF',
      "dialectOptions": {
        "ssl": true
    }
    }
  },
  production: {
    db: {
      dialect: 'sqlite',
      storage: 'db/database.sqlite'
    }
  }
};
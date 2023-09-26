const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_3snm', // Database name
  'clouduser', // User
  'H1MEeybLiegNFioQqpZw4QUkUtqm4mIF', // Password
  {
    host: '@dpg-ck9d0i1ehpqs73c3ip4g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize

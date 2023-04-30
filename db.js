const {Sequelize} = require("sequelize")


module.exports = new Sequelize("onlineStore", "postgres", "oturig02",
{
    host: "localhost",
    port: 5432,
    dialect: "postgres"
})
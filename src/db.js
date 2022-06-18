const { Sequelize } = require('sequelize');


const dbSequelize = new Sequelize('sosmulher', 'root', 'aluno', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = dbSequelize;
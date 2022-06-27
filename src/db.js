const { Sequelize } = require('sequelize');


//const dbSequelize = new Sequelize('sosmulher', 'root', 'aluno', {
//    host: 'localhost',
//    dialect: 'mysql'
//});

dbSequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

dbSequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = dbSequelize;

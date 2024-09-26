const sequelize = require('../config/database');
const User = require('./user');
const Project = require('./project');

const connectDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database connected');
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
};

module.exports = { connectDB, User, Project };

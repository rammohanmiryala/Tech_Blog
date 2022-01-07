const sequelize = require('../config/connection');
const { User, Blogpost,Comments } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogpost of blogpostData) {
    try{
      await Blogpost.create({
        ...blogpost,
      });
    }catch(err){
      console.log(err)
    }
    
  }
  for (const comments of commentsData) {
    try{
      await Comments.create({
        ...comments,
      });
    }catch(err){
      console.log(err)
    }
    
  }
  process.exit(0);
};

seedDatabase();

const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments');

User.hasMany(Blogpost, {             // User has one:many relationship to BlogPost. One user can have many only BlogPost
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {           // BlogPost has one:one relationship to User. One BlogPost can have only one User
  foreignKey: 'user_id'
});


Blogpost.hasMany(Comments, {          // Blogpost has one:many relationship to Comments. One Blogpost can have  many Comments
  foreignKey: 'Blogpost_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Blogpost, {        // Comments has one:one relationship to Blogpost. One Comment can have only one Blogpost
  foreignKey: 'Blogpost_id'
});

User.hasMany(Comments, {             // User has one:many relationship to Comments. One User can do many Comments
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {         // Comments has one:one relationship to User. One Comment can have only one User
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost,Comments };


// blogpost belong to user , blogpost hasmany comments, comments belongsto user
const User = require('./User')
const Like = require('./Likes');




User.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id'
  });


  Like.belongsTo(User, {
    foreignKey: 'user_id'
  });


  User.hasMany(Like, {
    foreignKey: 'user_id'
  });

module.exports = { User, Like };
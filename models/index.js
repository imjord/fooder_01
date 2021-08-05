const User = require('./User')
const Like = require('./Likes');
const Restaurants = require('./Restaurants')


Restaurants.belongsToMany(User, {
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

module.exports = { User, Like, Restaurants };
const User = require('./User')
const Like = require('./Likes');
const Restaurants = require('./restaurants')


  Like.belongsTo(User, {
    foreignKey: 'user_id'
  });


  User.hasMany(Like, {
    foreignKey: 'user_id'
  });

module.exports = { User, Like, Restaurants };
const router = require('express').Router();
const sequelize =require('../../config/connection');
const { restaurants , User, Likes } = require('../../models');

const homeRoutes = require('./home-routes.js')



router.use('/', homeRoutes);






router.get('/', (req, res) => {
  res.render('homepage', { 
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'handlebars docs',
      created_at: new Date(),
      vote_count: 10,
      user: {
          username: 'test_user'
      }
  });
});

module.exports = router;
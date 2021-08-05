const router = require('express').Router();
const sequelize = require('../config/connection');
// const restaurantInfo = require('../seeds/index')

// const { restaurants , User, Likes } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/login', (req,res) => {
  res.render('login')
})

router.get('/home', (req, res) => {
  res.render('homepage', {
    // restaurant: restaurantInfo()
      title: 'McDonalds',
      description: "McDonald's is a fast food, limited service restaurant with more than 35,000 restaurants in over 100 countries.",
  });
});



router.get('/likes-page', (req,res) => {
  res.render('likes-page', {
    title: 'McDonalds'
  });
})


module.exports = router;
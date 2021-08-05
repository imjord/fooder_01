const router = require('express').Router();
const sequelize = require('../config/connection');
const restaurantInfo = require('../seeds/restuarant-seeds')

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
    restaurants: restaurantInfo,
  });
  console.log("Hello World!")
});



router.get('/likes-page', (req,res) => {
  res.render('likes-page', {
    title: 'McDonalds'
  });
})


module.exports = router;
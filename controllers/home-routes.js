const router = require('express').Router();
const sequelize = require('../config/connection');

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
  res.render('homepage');
});




router.get('/likes-page', (req,res) => {
  res.render('likes-page')
})


module.exports = router;
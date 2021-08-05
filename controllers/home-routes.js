const router = require('express').Router();
const sequelize = require('../config/connection');

// const { restaurants , User, Likes } = require('../models');



router.get('/', (req, res) => {
  res.render('homepage', {
    
  });

});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
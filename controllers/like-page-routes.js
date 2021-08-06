const router = require('express').Router();
const sequelize = require('../config/connection');


// get all likes to like page

router.get('/likes-page', (req, res) => {
    res.render('likes-page');
  });



  module.exports = router;
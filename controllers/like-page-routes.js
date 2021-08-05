const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/like', (req, res) => {
    res.render('likes-page');
  });
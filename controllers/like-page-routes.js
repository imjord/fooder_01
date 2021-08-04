const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/likes-page', (req, res) => {
    res.render('likes-page');
  });
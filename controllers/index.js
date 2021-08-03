const router = require('express').Router();
const sequelize = require('../config/connection');
const homeRoutes = require('./home-routes.js');



router.use('/', homeRoutes);

module.exports  = router;
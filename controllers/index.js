const router = require('express').Router();
const sequelize = require('../config/connection');
const homeRoutes = require('./home-routes.js');
const likesRoutes = require('./like-page-routes')



router.use('/', homeRoutes);
// router.use('/like', likesRoutes);

module.exports  = router;
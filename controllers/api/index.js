const router = require('express').Router();
const sequelize = require('../../config/connection');

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');



router.use('/users', userRoutes);


module.exports  = router;
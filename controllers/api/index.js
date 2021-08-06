const router = require('express').Router();
const sequelize = require('../../config/connection');

const userRoutes = require('./user-routes.js');
const loginRoutes = require('./login-route');



router.use('/users', userRoutes);
router.use('/login', loginRoutes);


module.exports  = router;
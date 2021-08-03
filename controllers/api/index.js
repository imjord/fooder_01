const router = require('express').Router();
const sequelize = require('../../config/connection');


const apiRoutes = require('./api/');

const loginRoutes = require('./login-route.js');


router.use('/', homeRoutes);
// router.use('/login', loginRoutes);
// router.use('/api', apiRoutes);


module.exports  = router;
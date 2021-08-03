const router = require('express').Router();



const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-route.js');


router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/api', apiRoutes);


module.exports  = router;
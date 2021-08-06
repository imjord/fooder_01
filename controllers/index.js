const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const likesRoutes = require('./like-page-routes')


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/likes-page', likesRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports  = router;
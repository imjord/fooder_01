// Api routes
const router = require('express').Router();

const userRoutes = require('../api/user-routes');
const commentRoutes = require('../api/comment-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports  = router;
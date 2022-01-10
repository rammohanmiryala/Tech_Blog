const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const dashboardRoute = require('./dashboardRoute');


router.use('/user', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/', dashboardRoute);

module.exports = router;

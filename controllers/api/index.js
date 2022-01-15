const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

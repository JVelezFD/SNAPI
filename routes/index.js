const router = require('express').Router();

const userRoutes = require('./api/userroutes');
const thoughtRoutes = require ('./api/thoughtroutes')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes)

module.exports = router; 
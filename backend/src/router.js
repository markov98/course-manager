const router = require("express").Router();
const userController = require('./controllers/userController');
const courseController = require('./controllers/courseController');

router.get('/', (req, res) => {
    res.send('Welcome to the Course API!')
})

router.use('/users', userController);
router.use('/courses', courseController)

module.exports = router;
const router = require("express").Router();
const courseService = require('../services/courseService');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/get-all', async (req, res) => {
    try {
        const result = await courseService.getAll();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', isAuth, async (req, res) => {
    try {
        const courseId = req.params.id;
        const { name, description } = req.body
        const result = await courseService.editCourse(courseId, name, description);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
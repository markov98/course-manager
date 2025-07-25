const router = require("express").Router();
const userService = require('../services/userService');
const { isAuth, revokeToken } = require('../middlewares/authMiddleware');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await userService.login(email, password);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
});

router.post("/logout", isAuth, (req, res) => {
    revokeToken(req.token);
    res.json({ message: "Logout successful!" });
});

module.exports = router;
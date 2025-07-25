const jwt = require("jsonwebtoken");
const db = require('../config/db')
const { SECRET } = require("../constants");

exports.login = async (email, password) => {
    const stmt = db.prepare('SELECT id, email, password FROM users WHERE email = ?');
    const user = stmt.get(email);

    if (!user) {
        throw new Error('Incorrect email or password');
    }


    if (password !== user.password) {
        throw new Error('Incorrect email or password');
    }

    return getResult(user);
};


function getResult(user) {
    const payload = { _id: user.id, email: user.email };
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    const result = {
        _id: user.id,
        accessToken: token,
        email: user.email,
    };

    return result;
}

const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, process.env.token_key);
        req.user = decoded;
        // console.log(req.user)
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = { auth }
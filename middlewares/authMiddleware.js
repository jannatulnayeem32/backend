const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers

    if (authorization) {
        const token = authorization.split(' ')[1]
        if (token) {
            try {
                const deCodeToken = await jwt.verify(token, process.env.SECRET)
                req.role = deCodeToken.role
                req.id = deCodeToken.id
                next()

            } catch (error) {
                return res.status(401).json({ message: 'unauthorized' })
            }
        } else {
            return res.status(401).json({ message: 'unauthorized' })
        }
    } else {
        return res.status(401).json({ message: 'unauthorized' })
    }
}
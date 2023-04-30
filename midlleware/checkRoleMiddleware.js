const jwt = require("jsonwebtoken")


module.exports = function (role) {


    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }


        try {
            const bearer = req.headers['authorization']
            const token = bearer && bearer.split(" ")[1]

            if (!token) return res.status(401).json({message: "User not authorized."})

            const decoded = jwt.verify(token, "SECRET")
            if (decoded.role !== role) {
                return res.status(403).json({message: "Access denied"})
            }
            req.user = decoded

            next()
        } catch (error) {
            res.status(401).json({message: "User not authorized."})
        }
    }
}

const ApiError = require("../error/apiError")
const {User, Bascket} = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const generateJWT = ({id, email, role}, expiresIn = "24h") => {
    return jwt.sign({
        id,
        email,
        role
    }, "SECRET", {
        expiresIn
    })
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest("Email or password incorrect."))
        }

        const candidate = await User.findOne({
            where: {
                email
            }
        })
        if(candidate) {
            return next(ApiError.badRequest("User already exist."))
        }

        const hashPassword = await bcrypt.hash(password, 4)

        const user = await User.create({
            email,
            password: hashPassword,
            role
        })

        const basket = await Bascket.create({
            userId: user.id
        })

        const jwtToken = generateJWT(user)

        return res.json({jwtToken})
    }

    async getUser(req, res, next) {
        const query = req.query
        if (!query.id) {
            return next(ApiError.badRequest("Id not found."))
        }
        res.json(query)
    }

    async login(req, res, next) {

        const {email, password} = req.body
        const candidate = await User.findOne({
            where: {
                email
            }
        })

        if (!candidate) return next(ApiError.internalError("User not found"))

        let compareSync = bcrypt.compareSync(password, candidate.password)
        if (!compareSync) {
            return next(ApiError.internalError("Email or password incorrect."))
        }

        const token = generateJWT(candidate)

        return res.status(200).json({token})
    }

    async check(req, res) {
        const token = generateJWT(req.body.user)
        return res.json({token})
    }
}


module.exports = new UserController()
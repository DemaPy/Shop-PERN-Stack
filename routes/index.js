const Router = require("express")
const router = new Router()
const user = require("./userRoutes")
const brand = require("./brandRoutes")
const type = require("./typeRoutes")
const device = require("./deviceRoutes")

router.use("/user", user)
router.use("/brand", brand)
router.use("/type", type)
router.use("/device", device)


module.exports = router
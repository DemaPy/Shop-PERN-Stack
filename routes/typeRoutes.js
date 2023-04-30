const Router = require("express")
const router = new Router()
const TypeController = require("../controllers/typeController")
const checkRoleMiddleware = require("../midlleware/checkRoleMiddleware")

router.post("/", checkRoleMiddleware("ADMIN"), TypeController.create)
router.get("/", TypeController.get)


module.exports = router
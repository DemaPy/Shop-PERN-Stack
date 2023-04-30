const Router = require("express")
const router = new Router()
const DeviceController = require("../controllers/deviceController")
const checkRoleMiddleware = require("../midlleware/checkRoleMiddleware")


router.post("/", checkRoleMiddleware("ADMIN"), DeviceController.create)
router.get("/", DeviceController.get)
router.get("/:id", DeviceController.getBy)


module.exports = router
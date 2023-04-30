const Router = require("express")
const router = new Router()
const BrandController = require("../controllers/brandController")
const checkRoleMiddleware = require("../midlleware/checkRoleMiddleware")

router.post("/",checkRoleMiddleware("ADMIN"), BrandController.create)
router.get("/", BrandController.get)


module.exports = router
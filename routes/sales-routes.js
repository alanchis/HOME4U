
// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const salesController 	= require("./../controllers/salesController")

const routeGuard = require("../middlewares/route-guard")


// 2. ROUTER
// A. HOME
router.get("/", salesController.getSales)

router.get("/new",salesController.getNew)

router.post("/new",salesController.postNew)

// B. profile
//router.get("/profile", routeGuard.privateAreas, indexController.getProfile)



// 3. EXPORTS
module.exports = router
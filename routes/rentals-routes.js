
// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const rentalsController 	= require("./../controllers/rentalsController")

const routeGuard = require("./../middlewares/route-guard")


// 2. ROUTER
// A. HOME
router.get("/", rentalsController.getRentals)

// B. profile
//router.get("/profile", routeGuard.privateAreas, indexController.getProfile)



// 3. EXPORTS
module.exports = router
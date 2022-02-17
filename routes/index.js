// ./routes/index.js

// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const indexController 	= require("./../controllers/indexController")

const routeGuard = require("./../middlewares/route-guard")


// 2. ROUTER
// A. HOME
router.get("/", indexController.getHome)


router.get("/aboutus",indexController.getAboutUs)

// B. profile
router.get("/profile", routeGuard.privateAreas, indexController.getProfile)



// 3. EXPORTS
module.exports = router

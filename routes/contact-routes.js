// ./routes/index.js

// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const contactController 	= require("./../controllers/contactController")

const routeGuard = require("./../middlewares/route-guard")


// 2. ROUTER
router.get("/", contactController.getContact)
router.post("/",contactController.postContact)





// 3. EXPORTS
module.exports = router

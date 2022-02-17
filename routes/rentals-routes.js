
// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const rentalsController 	= require("./../controllers/rentalsController")

const routeGuard = require("./../middlewares/route-guard")


// 2. ROUTER
        // A. HOME
router.get("/", rentalsController.getRentals)

        // B. Create
router.get("/new",routeGuard.privateAreas, rentalsController.getNew)
router.post("/new",rentalsController.postNew)


        // C. Read
router.get("/:id",routeGuard.privateAreas,rentalsController.getSingleRent)


        // D. Update/Edit
router.get("/:id/edit", routeGuard.privateAreas, rentalsController.editRent)
router.post("/:id/edit", routeGuard.privateAreas,rentalsController.editRentForm)


        // E. Remove
router.post("/:id/delete",routeGuard.privateAreas, rentalsController.deleteRents)





// 3. EXPORTS
module.exports = router

// 1. IMPORTS
const express			= require("express")
const router			= express.Router()

const salesController 	= require("./../controllers/salesController")

const routeGuard = require("../middlewares/route-guard")


// 2. ROUTER
        // A. HOME
router.get("/", salesController.getSales)


        // B. Create
router.get("/new",routeGuard.privateAreas,salesController.getNew)
router.post("/new",salesController.postNew)

        // C. Read
router.get("/:id",routeGuard.privateAreas,salesController.getSingleSale)


        // D. Update/Edit
router.get("/:id/edit", routeGuard.privateAreas, salesController.editSale)
router.post("/:id/edit", routeGuard.privateAreas,salesController.editSaleForm)

        // E. Remove
router.post("/:id/delete",routeGuard.privateAreas, salesController.deleteSales)





// 3. EXPORTS
module.exports = router
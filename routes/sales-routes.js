
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

        // C. Update/Edit

router.get("/:saleID",routeGuard.privateAreas,salesController.getSingleSale)




// 3. EXPORTS
module.exports = router
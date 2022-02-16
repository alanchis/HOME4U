// 1. MAIN CONTROLLERS

const Sales = require("../models/Sales.model")



    // HOME CONTROLLERS
exports.getSales = async  (req, res) => {
  const allSales = await Sales.find({});
	res.render("sales/getSales", {allSales});
  };
  


    // CREATE (CONTROLLERS)

exports.getNew = (req, res) => {
    res.render("sales/createSales")
}

exports.postNew = async (req, res) => {
  const { name, type,cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description, image } = req.body;
  try {
    const newProperty = await Sales.create({
      name, type,cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description, image
    });

    console.log(newProperty);

    return res.redirect("/sales");
  } catch (error) {
    console.log(error);
  }
}

    // READ (CONTROLLERS)
exports.getSingleSale = async function (req, res) {
  const {id} = req.params
  const getSingleSale = await Sales.findById(id)
  return res.render("sales/salesDetails",{ sale: getSingleSale})
}



// UPDATE/EDIT  (CONTROLLERS)
exports.editSale = async (req, res) => {
  const { id } = req.params
	const singleSale = await Sales.findById(id)
  res.render(`sales/editSales`, {
    singleSale,
	})
}


exports.editSaleForm = async (req, res) => {
const { 
       name,
       type,
       cost,
       city,
       neighborhood,
       area,
       bedrooms,
       bathrooms,
       parking,
       state,
       description,
       image } = req.body;
const {id} = req.params

await Sales.findByIdAndUpdate(
  id,
  { name,
    type,
    cost,
    city,
    neighborhood,
    area,
    bedrooms,
    bathrooms,
    parking,
    state,
    description,
    image },
  { new: true }
)
return res.redirect(`/sales/${id}`)}




// REMOVE  (CONTROLLERS)
exports.deleteSales = async (req, res) => {
  const { id } = req.params
  console.log(`este es el id de delete ${id}`)
  
  try {
  const deletedSale = await Sales.findByIdAndDelete(id)
  console.log(deletedSale)
  res.redirect("/sales")
  
  } catch (error) {
  console.log(error)
  res.render(`sales/${id}`)
  }}
  



// 1. MAIN CONTROLLERS

const Rentals = require("../models/Rentals.model")



    // HOME (CONTROLLERS)
exports.getRentals = async  (req, res) => {
  const allRents = await Rentals.find({});
	res.render("rentals/getRentals", {allRents});
  };
  

    // CREATE (CONTROLLERS)

	exports.getNew = (req, res) => {
		res.render("rentals/createRents")
	}
	
	exports.postNew = async (req, res) => {
	  const { name, type, cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description, image } = req.body;
	  try {
		const newPropertyForRent = await Rentals.create({
		  name, type,cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description, image
		});
	
		console.log(newPropertyForRent);
	
		return res.redirect("/rentals");
	  } catch (error) {
		console.log(error);
	  }
	}

    // READ (CONTROLLERS)
	exports.getSingleRent = async function (req, res) {
		const {id} = req.params
		const getSingleRent = await Rentals.findById(id)
		return res.render("rentals/rentalsDetails",{ rent: getSingleRent})
	  }


	// UPDATE/EDIT  (CONTROLLERS)
exports.editRent = async (req, res) => {
	const { id } = req.params
	  const singleRent = await Rentals.findById(id)
	res.render(`rentals/editRents`, {
	  singleRent,
	  })
  }
  
  
  exports.editRentForm = async (req, res) => {
  const { name, type, cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description , image } = req.body;
  const {id} = req.params
  
  await Rentals.findByIdAndUpdate(
	id,
	{ name, type, cost, city, neighborhood, area, bedrooms, bathrooms, parking, state, description , image },
	{ new: true }
  )
  return res.redirect(`/rentals/${id}`)}


  // REMOVE  (CONTROLLERS)
exports.deleteRents = async (req, res) => {
	const { id } = req.params
	console.log(`este es el id de delete ${id}`)
	
	try {
	const deletedRents = await Rentals.findByIdAndDelete(id)
	console.log(deletedRents)
	res.redirect("/rentals")
	
	} catch (error) {
	console.log(error)
	res.render(`rentals/${id}`)
	}}
	
	
	
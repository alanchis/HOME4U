// 1. CONTROLLERS

const Sales = require("../models/Sales.model")

exports.getSales = async  (req, res) => {
  const allSales = await Sales.find({});
	res.render("sales/getSales", {allSales});
  };
  

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






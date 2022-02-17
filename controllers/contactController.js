const Contact = require("../models/Contact.model")


// 1. CONTROLLERS

exports.getContact = (req, res) => {
	res.render("contact");
  };

exports.postContact = async (req, res) => {
    const { fullName, email, phone, message } = req.body;
    try {
      const newContact = await Contact.create({
        fullName, email, phone, message
      });
  
  
  
      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }}
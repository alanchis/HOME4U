// 1. CONTROLLERS

exports.getHome = (req, res) => {
	res.render("index");
  };

exports.getContact = (req, res) => {
	res.render("contact");
}

exports.getAboutUs = (req, res) => {
	res.render("aboutus")
}
  
  exports.getProfile = (req, res) => {
	//console.log("session:" , req.session);
	const {currentUser} = req.session
    
	res.render("profile")

  };
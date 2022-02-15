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
  
	// SOLUCIÓN 1
	// const username = currentUser ? currentUser.username : ""
	// const email = currentUser ? currentUser.email : ""
	// const msg = currentUser ? currentUser.msg : ""
  
	res.render("profile")

  };
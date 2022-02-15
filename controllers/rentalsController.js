// 1. CONTROLLERS

exports.getRentals = (req, res) => {
	res.render("rentals/getRentals.hbs");
  };
  
  //exports.getProfile = (req, res) => {
	//console.log("session:" , req.session);
	//const {currentUser} = req.session
  
	// SOLUCIÓN 1
	// const username = currentUser ? currentUser.username : ""
	// const email = currentUser ? currentUser.email : ""
	// const msg = currentUser ? currentUser.msg : ""
  
	//res.render("profile")

//  };
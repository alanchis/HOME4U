// ./controllers/authController
const bcryptjs		= require("bcryptjs")
const mongoose		= require("mongoose")
const User			= require("./../models/User")



exports.register = (req, res) => {
	res.render("auth/register")
}


exports.registerForm = async (req, res) => {
	const { username, email, password, date } = req.body

	if(!username || !email || !password){
		return res.render("auth/register", {
			errorMessage: "All fields all required."
		})
	}	


	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
	if(!regex.test(password)){
			return res.render("auth/register", {
			errorMessage: "Your password must include 6 characters, at least one number, one lowercase and one uppercase."
		})
	}



	// 2. ENCRYPT PASSWORD
	const salt = await bcryptjs.genSalt(10)
	const hashedPassword = await bcryptjs.hash(password, salt)

		// SAVE IN DATABASE
	try {
		const newUser = await User.create({
			username,
			email, 
			password: hashedPassword
		})
		return res.redirect("/auth/login")

	} catch (error) {		
		console.log(error)
		console.log(error.errors)

		// CONFIRM IF THE ERROR COMES FROM THE DATABASE
		if (error instanceof mongoose.Error.ValidationError){			
			return res.render("auth/register", {
				errorMessage: "Please use a real e-mail."
			})
		}	
	}
}


exports.login = (req, res) => {
	res.render("auth/login")
}

exports.loginForm = async (req, res) => {


	// 1. GET DE FORM
	const { email, password } = req.body

	// 2. USER VALIDATION - USER FOUND IN DATABASE

	const foundUser = await User.findOne({ email })

	if(!foundUser){

		res.render("auth/login", {
			errorMessage: "No matches for the email, please sign up."
		})

		return
	}

	// 3. PASSWORD VALIDATION

	const verifiedPass = await bcryptjs.compareSync(password, foundUser.password)

	if(!verifiedPass){

		res.render("auth/login", {
			errorMessage: "Wrong email or password."
		})

		return

	}

	// 4. SESSION MANAGER. IF THE PASSWORD MATCHES, CREATE A COOKIE 
	req.session.currentUser = {
		_id: foundUser._id,
		username: foundUser.username,
		email: foundUser.email,
		msg: "you are logged in"
	}

	// 5. REDIRECT TO PROFILE
	return res.redirect("/profile")

}

exports.logout = (req, res) => {
	req.session.destroy((error) => {
		if (error){
			console.log(error)
			return
		}
		res.redirect("/")

	})
}
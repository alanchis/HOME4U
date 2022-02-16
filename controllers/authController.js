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



	// 2. ENCRIPTAR CONTRASEÑA
	const salt = await bcryptjs.genSalt(10)
	const hashedPassword = await bcryptjs.hash(password, salt)

		// GUARDAR EN BASE DE DATOS
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

		// CONFIRMAR SI EL ERROR VIENE DE BASE DE DATOS
		if (error instanceof mongoose.Error.ValidationError){			
			return res.render("auth/register", {
				errorMessage: "Por favor utiliza un correo electrónico real."
			})
		}	
	}
}


exports.login = (req, res) => {
	res.render("auth/login")
}

exports.loginForm = async (req, res) => {


	// 1. OBTENCIÓN DE DATOS DEL FORMULARIO
	const { email, password } = req.body

	// 2. VALIDACIÓN DE USUARIO ENCONTRADO EN BD

	const foundUser = await User.findOne({ email })

	if(!foundUser){

		res.render("auth/login", {
			errorMessage: "No matches for the email, please sign up."
		})

		return
	}

	// 3. VALIDACIÓN DE CONTRASEÑA

	const verifiedPass = await bcryptjs.compareSync(password, foundUser.password)

	if(!verifiedPass){

		res.render("auth/login", {
			errorMessage: "Wrong email or password."
		})

		return

	}

	// 4. GESTIÓN DE SESIÓN. SI LA CONTRESEÑA COINCIDE ENTONCES CREAR UN RECORDATORIO (COOKIE) EN EL NAVEGADOR DE QUE SÍ ES EL USUARIO
	req.session.currentUser = {
		_id: foundUser._id,
		username: foundUser.username,
		email: foundUser.email,
		msg: "Este es su ticket"
	}

	// 5. REDIRECCIÓN AL PROFILE
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
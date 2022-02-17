// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const contactSchema = mongoose.Schema({

	fullName: {
		type: String,
		 
		required: true,
		
        
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		match:[/^\S+@\S+\.\S+$/, "Please use a valid email address."],
        
	},
    phone: {
		type: Number, 
		required: true,
    },
    message: {
        type: String,
        trim: true, 
        
    },

}, 	{
		timestamps: true 
	}
)

// 3. MODEL
const Contact = mongoose.model("Contact", contactSchema)

// 4. EXPORTACIÓN
module.exports = Contact


// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const userSchema = mongoose.Schema({

	name: {
        type: String,
        trim: true, 
        
    },
	type: {
        type: String,
        trim: true, 
        
    },
    state: {
        type: String,
        trim: true, 
        
    },
    cost: {
        type: Number,
        trim: true, 
        
    },
    city: {
        type: String,
        trim: true, 
        
    },
    neighborhood: {
        type: String,
        trim: true, 
        
    },
    area: {
        type: Number,
        trim: true, 
        
    },
    bedrooms: {
        type: Number,
        trim: true, 
        
    },
    bathrooms: {
        type: Number,
        trim: true, 
        
    },
    parking: {
        type: Number,
        trim: true, 
        
    },
    description: {
        type: String,
        trim: true, 
        
    },
    location: {
        type: String,
        trim: true,
        required: true 
        
    },
    image: {
        type: String,
        trim: true, 
        
}}
,{
        timestamps: true
    }
)


// 3. MODEL
const Rentals = mongoose.model("for rent", userSchema)

// 4. EXPORTACIÓN
module.exports = Rentals
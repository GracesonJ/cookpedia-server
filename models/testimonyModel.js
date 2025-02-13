// 1. import mangoose
const mongoose = require('mongoose')

// 2.create Schema
const testimonySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }, 
    message:{
        type:String,
        require:true
    }, 
    status:{
        type:String,
        require:true,
        default:"Pending"
    }
})

const testimonials = mongoose.model("testimonials", testimonySchema)
module.exports = testimonials
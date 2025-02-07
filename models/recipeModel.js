const mongoose = require("mongoose")
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    ingredients:{
        type:Array,
        require:true
    },
    instructions:{
        type:Array,
        require:true
    },
    prepTimeMinutes:{
        type:Number,
        require:true
    },
    cookTimeMinutes:{
        type:Number,
        require:true
    },
    servings:{
        type:Number,
        require:true
    },
    difficulty:{
        type:String,
        require:true
    },
    cuisine:{
        type:String,
        require:true
    },
    caloriesPerServing:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    mealType:{
        type:Array,
        require:true
    }
})

// create schema with same name for model and collection
const recipes = mongoose.model("recipes", recipeSchema)
module.exports = recipes
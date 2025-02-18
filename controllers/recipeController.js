const recipes = require("../models/recipeModel")

//get all recipes
exports.getAllRecipeController = async (req, res)=>{
    console.log(`inside getAllRecipeController`);
    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    } catch (err) {
        res.status(401).json(err)
    }
    
}

// get recipes
exports.getARecipeController = async (req, res)=>{
    console.log(`Inside Get A Recipe Controller`);
    // get dynamic values from url
    const {id} = req.params

    try {
        const recipeDetails = await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    } catch (error) {
        res.status(401).json(error)
    }
}

// related Recipe controller
exports.relatedRecipeController = async (req, res)=>{
    console.log(`Inside RelatedRecipeController`);
    const cuisine = req.query.cuisine
    try {
        const allRelatedRecipes = await recipes.find({cuisine})
        res.status(200).json(allRelatedRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
    
}
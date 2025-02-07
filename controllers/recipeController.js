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
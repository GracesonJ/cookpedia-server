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

//addRecipe
exports.addRecipeController = async (req,res)=>{
    console.log("Inside addRecipeController");
    //1. get all data from req body
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    try{
    //2. check recipe already in model
    const existingRecipe = await recipes.findOne({name})
    if(existingRecipe){
            //3.  recipe already exist
        res.status(406).json("Recipe already exist in our collection!!! Add Another...")
    }
    else{
    //4.  recipe not in model then insert the recipe
        const newRecipe = new recipes({
            name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
        })
        await newRecipe.save()
        res.status(200).json(newRecipe)
    }
    }catch(err){
        res.status(401).json(err)
    }
}

//updateRecipe
exports.updateRecipeController = async (req,res)=>{
    console.log("Inside updateRecipeController");
    // get id of recipe should be updated
    const {id} = req.params
    // get update recipe details from req.body
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = req.body
    //find recipe name is already exist
    try{
       //update recipe - findbyidandupdate
       const updatedRecipe = await recipes.findByIdAndUpdate({_id:id},{
        name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
    },{new:true})
    await updatedRecipe.save()
    res.status(200).json(updatedRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

//deleteRecipe
exports.removeRecipeController = async (req,res)=>{
    console.log("Inside removeRecipeController");
    // get recipe id
    const {id} = req.params
    //remove recipe from model - findByIdandDelete
    try{
        const removeRecipe = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

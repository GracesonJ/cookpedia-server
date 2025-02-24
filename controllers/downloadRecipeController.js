const downloadRecipes = require('../models/downlodModel')

//add to downloadRecipes
exports.addToDownloadRecipeController = async (req, res) => {
    console.log("Inside addToDownloadRecipeController");
    const { id } = req.params
    const userId = req.userId
    const { name, image, cuisine } = req.body
    console.log(id, name, image, cuisine, userId);
    try {
        //check recipe alredy in download 
        const exisitingRecipe = await downloadRecipes.findOne({ recipeId: id })
        if (exisitingRecipe) {
            // increment count of recipe by 1 - update
            exisitingRecipe.count += 1
            await exisitingRecipe.save()
            res.status(200).json(exisitingRecipe)
        } else {
            // add recipe to your model - insert
            const newRecipe = new downloadRecipes({
                recipeId: id, recipeName: name, recipeImage: image, recipeCuisine: cuisine, count: 1, userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//get user download recipes
exports.getUserDownloadListController = async (req, res) => {
    console.log("Inside getUserDownloadListController");
    //get userid from jwtmiddleware
    const userId = req.userId
    // find documents with userid from model
    try {
        const allUserDownloads = await downloadRecipes.find({ userId })
        res.status(200).json(allUserDownloads)
    } catch (err) {
        res.status(401).json(err)
    }
}


//get all download recipes
exports.getAllDownloadListController = async (req, res) => {
    console.log("Inside getAllDownloadListController");
    
    try {
        const allDownloads = await downloadRecipes.find()
        res.status(200).json(allDownloads)
    } catch (err) {
        res.status(401).json(err)
    }
}
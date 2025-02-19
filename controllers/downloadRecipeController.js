const downloadRecipes = require('../models/downlodModel')

//add to downloadRecipes
exports.addToDownloadRecipeController = async (req,res)=>{
    console.log("Inside addToDownloadRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image,cuisine} = req.body
    console.log(id,name,image,cuisine,userId);
    try{
        //check recipe alredy in download 
        const exisitingRecipe = await downloadRecipes.findOne({recipeId:id})
        if(exisitingRecipe){
            // increment count of recipe by 1 - update
            exisitingRecipe.count +=1
            await exisitingRecipe.save()
            res.status(200).json(exisitingRecipe)
        }else{
            // add recipe to your model - insert
            const newRecipe = new downloadRecipes({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
       res.status(401).json(err)        
    }
}
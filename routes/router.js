const express = require("express")
const recipeController = require('../controllers/recipeController')

const router = new express.Router()

//all-recipes
router.get("/all-recipes", recipeController.getAllRecipeController)

module.exports = router
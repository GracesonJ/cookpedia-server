const express = require("express")
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require("../middlewares/jwtMiddleware")
const downloadRecipeController = require("../controllers/downloadRecipeController")
const saveRecipeController = require('../controllers/saveRecipeController')
const router = new express.Router()

//all-recipes
router.get("/all-recipes", recipeController.getAllRecipeController)

//add-testymony
router.post("/add-testimony", testimonyController.addTestimonyController)

// register
router.post("/register", userController.addUserController)

// Login
router.post("/login", userController.loginController)

// view a single recipe
router.get("/recipe/:id/view", jwtMiddleware, recipeController.getARecipeController)

// Related Recipes
router.get("/related-recipes", jwtMiddleware, recipeController.relatedRecipeController)

//download recipe
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

//save recipe
router.post("/recipe/:id/save",jwtMiddleware,saveRecipeController.addToSaveRecipeController)

module.exports = router
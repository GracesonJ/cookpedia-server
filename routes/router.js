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
router.post("/recipe/:id/download", jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

//save recipe
router.post("/recipe/:id/save", jwtMiddleware, saveRecipeController.addToSaveRecipeController)

//get user saved recipe
router.get("/get-save-recipes", jwtMiddleware, saveRecipeController.getUserSavedRecipeController)

//delete user saved recipe
router.delete("/save-recipes/:id/remove",jwtMiddleware,saveRecipeController.removeSaveRecipeController)

//get user download recipe
router.get("/user-downloads",jwtMiddleware,downloadRecipeController.getUserDownloadListController)

//edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)

//all-user
router.get("/all-users", jwtMiddleware, userController.getAllUsersController)

//all-downloadliat
router.get("/download-list",jwtMiddleware,downloadRecipeController.getAllDownloadListController)

//get-testmony
router.get("/all-feedback", jwtMiddleware, testimonyController.getAllFeedbackController)

//update-testmony
router.get("/feedback/:id/update",jwtMiddleware,testimonyController.updateFeedbackStatusContoller)

//get-apporve-testmony
router.get("/all-approve-feedback",testimonyController.getAllApprovedFeedbackController)

//add recipes
router.post("/add-recipe",jwtMiddleware,recipeController.addRecipeController)

module.exports = router
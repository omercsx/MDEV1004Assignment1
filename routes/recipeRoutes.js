const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route to get top 20 recipes
router.get('/', recipeController.getTopRecipes);

module.exports = router; 
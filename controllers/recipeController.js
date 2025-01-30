const Recipe = require('../models/Recipe');

// Get top 20 recipes sorted by average rating
exports.getTopRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
            .sort({ averageRating: -1 })
            .limit(20);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
}; 
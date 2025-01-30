const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    cookingTime: {
        type: Number, // in minutes
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema); 
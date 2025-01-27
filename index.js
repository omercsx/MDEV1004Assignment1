const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const app = express();

const mongoURI = "mongodb+srv://user3:user3@cluster0.wljfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB
mongoose.connect(mongoURI)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error('Could not connect to MongoDB:', err));

app.get("/", (req, res) => {
	res.send("Hello World");
});

// Endpoint to get top 20 recipes sorted by average rating
app.get("/api/recipes", async (req, res) => {
	try {
		const recipes = await Recipe.find()
			.sort({ averageRating: -1 })
			.limit(20);
		res.json(recipes);
	} catch (error) {
		res.status(500).json({ message: "Error fetching recipes", error: error.message });
	}
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

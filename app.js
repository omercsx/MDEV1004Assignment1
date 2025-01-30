const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/recipes', recipeRoutes);

module.exports = app; 
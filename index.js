const express = require("express");
const app = express();

const mongoURI = "mongodb+srv://user3:user3@cluster0.wljfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

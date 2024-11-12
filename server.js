const express = require("express");

const app = express();

app.get("/greet-user", (req, res) => {
	const username = req.query.username || "World";
	res.send(`Hello, ${username}`);
});

const port = 8080;

app.listen(port, () => {
	console.log(`App running at: http://localhost:${port}`);
});

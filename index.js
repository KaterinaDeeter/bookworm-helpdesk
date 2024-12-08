const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // Default to 5000 for local development

app.get("/messages", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

console.log("Hello World")
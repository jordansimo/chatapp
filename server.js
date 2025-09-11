const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());

app.post("/message", (req, res) => {
    const { text } = req.body;
    res.json({ reply: text });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
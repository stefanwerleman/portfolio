const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = 5000;
const app = express();

app.enable("trust proxy");
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World 😁" });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

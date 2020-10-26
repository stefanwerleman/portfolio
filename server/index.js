const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = 3000;
const app = express();

app.use(cors);
app.enable("trust proxy");
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the server 😁" });
});

app.listen(PORT, () => {
    console.log("Listening on http://localhost:3000");
});

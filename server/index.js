const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const PORT = 5000;
const app = express();

app.enable("trust proxy");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello World 😁" });
});

app.post("/email", (req, res) => {
    let email = req.body;
    console.log(email);
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

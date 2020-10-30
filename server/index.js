const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sgmail = require("@sendgrid/mail");

dotenv.config();

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

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

const msg = {
    to: "stefanwerleman@yahoo.com",
    from: "stefanwerleman@yahoo.com",
    subject: "Test Send with SendGrid",
    text: '"Hello There" - Obi Wan Kenobi',
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

function sgTest(msg) {
    sgmail
        .send(msg)
        .then(() => {
            console.log("Email Sent");
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

sgTest(msg);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

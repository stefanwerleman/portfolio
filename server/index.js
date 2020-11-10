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
    from: "stefanwerleman@knights.ucf.edu",
    subject: "Test Send with SendGrid",
    text: '"Hello There" - Obi Wan Kenobi',
    html: `<strong>"Hello There" - Obi Wan Kenobi</strong>`,
};

function sendEmail(msg) {
    sgmail
        .send(msg)
        .then(() => {
            console.log("Email Sent");
        })
        .catch((error) => {
            console.error("Failed to send email");
            console.error(error);
        });
}

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

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

const sendEmail = async (msg) => {
    await sgmail
        .send(msg)
        .then(() => {
            console.log("Email Sent");
        })
        .catch((error) => {
            console.error("Failed to send email");
            console.error(error);
        });
};

app.get("/", (req, res) => {
    res.json({
        message: "Hello There - Obo Wan Kenobi",
    });
});

app.post("/email", (req, res) => {
    let email = req.body;

    const msg = {
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "Someone sent you a message on your personal website.",
        text: `${email.name} ${email.email} ${email.message}`,
        html: `<h3><strong>${email.name}</strong></h3><h3><a>${email.email}</a></h3><br></br><p>${email.message}</p>`,
    };

    sendEmail(msg);

    res.json({
        status: 200,
        message: "Successfully Submitted",
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

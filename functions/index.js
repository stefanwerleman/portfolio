const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/hello', (req, res) => {
	res.json({
		message: 'Hello There -Obi Wan Kenobi',
	});
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);

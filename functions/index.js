const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// setup routes...
app.get('/test', (req, res) => {
  res.send('Wow, it actually worked.');
});

app.get('/another-one', (req, res) => {
  res.send('This one works, too!');
});

app.delete('/delete-one', (req, res) => {
  Array.splice(3,5) 
})

exports.api = functions.https.onRequest(app);

// We did it







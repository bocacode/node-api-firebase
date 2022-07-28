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

app.get('/', (req, res) => {
  res.send('sending all items')
})

exports.api = functions.https.onRequest(app);







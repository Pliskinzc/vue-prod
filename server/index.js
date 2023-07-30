const express = require('express');
const path = require('path');
const port = process.env.PORT | '3000';
const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb+srv://aziz:aziza@cluster0.8kfotz7.mongodb.net/?retryWrites=true&w=majority'
);
client
  .connect()
  .then(() => {
    console.log('connectedb !');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.static('../client-build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-build/index.html'))
})

app.listen(port);
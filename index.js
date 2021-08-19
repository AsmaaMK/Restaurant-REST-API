const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = '4500';

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/restaurant', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./controllers/routs'));

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message,
  });
});

// listen for request
app.listen(port, () => {
  console.log('Listening for requests on port: ' + port);
});
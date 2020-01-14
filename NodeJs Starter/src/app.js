var http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
// const routes = require('./routes');

app.use(bodyParser.json()); // formats the json for use
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.use('/', routes);

const port = process.env.port || 8000;

app.listen(port, () =>
  console.log(`A Node JS API is listening on port ${port}`)
);

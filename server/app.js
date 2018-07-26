//Express is a routing and middleware web framework

// An Express application can use the following types of middleware:
// Application-level middleware //var app = express()
// Router-level middleware //var router = express.Router()
// Error-handling middleware //Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three
// Built-in middleware
// Third-party middleware

//bodyParser returns a function that acts as middleware. The function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets.
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data


const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const app = express();


app.use(bodyParser.json());

app.use('/', routes);

app.use((req, res, next) => {
    console.log('hello');
    res.send('Hi Mauli');
});



module.exports = app;

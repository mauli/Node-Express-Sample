//Express is a routing and middleware web framework

// An Express application can use the following types of middleware:
// Application-level middleware //var app = express()
// Router-level middleware //var router = express.Router()
// Error-handling middleware //Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three
// Built-in middleware
// Third-party middleware


const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const app = express();

// app.use((req, res, next) => {
//     console.log('hello');
//     res.send('Hi Mauli');
// });

app.use('/', routes);


module.exports = app;

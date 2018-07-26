const v1 = require('./v1');
const v2 = require('./v2');
const routes = require('express').Router();

routes.use('/v1', v1);
routes.use('/v2', v2);
routes.use('/', v2); // Set the default version to latest.

// routes.get('/', function (req, res) {
//     // res.redirect('/todo');
// });

module.exports =  routes;
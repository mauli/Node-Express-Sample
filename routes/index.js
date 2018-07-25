

const todo = require('./todo');
const user = require('./user');
const routes = require('express').Router();

routes.use('/todo', todo);
routes.use('/user', user);


routes.get('/', function (req, res) {
    // res.redirect('/todo');
});

module.exports =  routes;
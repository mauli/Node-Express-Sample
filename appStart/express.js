//https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
//https://www.eecs.umich.edu/courses/eecs489/w07/LectureSlides/socketProgramming.pdf
//https://www.ibm.com/developerworks/linux/tutorials/l-sock/l-sock-pdf.pdf
//https://www.youtube.com/watch?v=P9csgxBgaZ8
//********************** NODE ************************************

//Event Loop:
//Event loop is a semi infinite loop polling and blocking on the OS until some in a set of file descriptors are ready.
//It has a collection of file descriptors that it asks the operating system to monitor, using a mechanism like epoll (Linux), kqueue (OSX), event ports (Solaris), or IOCP (Windows). 
//These file descriptors correspond to network sockets, any files it is watching, and so on. When the operating system says that one of these file descriptors is ready, 
//the Event Loop translates it to the appropriate event and invokes the callback(s) associated with that event.

//Epoll calls the event loop whenever the one of the 2 events occurs a new TCP socket connection is set up or any existing connection has any data

//worker pool(default 4 threads):
//Worker Pool uses a real queue whose entries are tasks to be processed. 
//A Worker pops a task from this queue and works on it, and when finished the Worker raises an "At least one task is finished" event for the Event Loop.

//ticks:
//In Node.js, each iteration of an Event Loop is called a tick
//https://medium.com/@amanhimself/how-process-nexttick-works-in-node-js-cb327812e083

// The Event Loop is responsible for JavaScript callbacks and non-blocking I/O, 
// and a Worker executes tasks corresponding to 
// 1.C++ add oncode that completes an asynchronous request, 
// 2.blocking I/O(FS unless they are sync, DNS look up) and 
// 3.CPU-intensive work(crypto, zlib)

//Suppose you want to do complex calculations in JavaScript without blocking the Event Loop. 
//You have two options: partitioning[creating multiple functions, calls] or offloading[clustering]



//********************** EXPRESS ************************************

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

// global.any variable will be treated and global and will be accessible across the full app

const express = require('express');
var morgan  = require('morgan')
const bodyParser = require('body-parser');
const routes = require('../routes');
const config = require('../common/fetchconfig')
const app = express();
require('../common/fetchconfig').loadConfig({'environment': process.env.NODE_ENV || 'development' });


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use((req, res, next) => {
    console.log('hello', global.envData.PORT);
    
    res.send('Hi Mauli');
});

module.exports = app;

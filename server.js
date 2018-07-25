//npm install --save-dev nodemon
//node app.js


const app = require('./server/app');
const http = require('http');

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);



// Get dependencies
// read .env into Node on dev systems
require("dotenv").config();
const express = require('express');
const path = require('path');
const http = require('http');
// const cookieSession = require('cookie-session');
// const cors = require('cors');
const bodyParser = require('body-parser');
const BASE_URL = process.env.APP_BASE_URL || '/';

const {c, co, s, sn} = require('./util/console');

/**
 * ********************
 *  WELCOME MESSAGES
 *  *******************
 */
c('================================================');
c('|                                              |');
c('|           Cypress Angular test               |');
c('|                                              |');
c('================================================');
s();
co('Starting server application');
co('Requiring libraries');
co('Setting up user Data');
co( 'Setting up API requirements' );
// Get our API routes
const api = require('./routes/api');
const authApi = require('./routes/auth.api');

co( 'Setting up Express Framework' );
const app = express();

co( 'Setting up CORS' );
//allow CORS
// app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

co( 'Setting up body parser' );
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

co( 'Setting up static path' );
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// co( 'Setting up Cookie Session' );
// app.use(cookieSession({
//   name: 'cypress_session',
//   secret: 'cypress_cookie_secret_key',
// }));


co( 'Setting up API routes' );
// Set our api routes
app.use(`${BASE_URL}api`, api);
app.use(`${BASE_URL}api/auth`, authApi);

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000';
co( 'Setting up API Port: ' + port );
app.set('port', port);

/**
 * Create HTTP server.
 */
co( 'Starting HTTP server' );
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
process.on('uncaughtException', function (err) {
  debug(err);
  process.exit(1);
});
server.listen(port, () => co(`API running on localhost:${port}`));
s();
s();
co('Server started using port ' + port);
co('Please report any issues to The Hatch developer team');
sn(3);

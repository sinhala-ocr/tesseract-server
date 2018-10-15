// Get dependencies
const express    = require('express');
const path       = require('path');
const http       = require('http');
const bodyParser = require('body-parser');
const io         = require('socket.io')(http);
const cors       = require('cors');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/tesseract-server')));

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Set api routes
const routes = require('./routes/index.route');
app.use('/api', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/tesseract-server/index.html')));

// Get port from environment and store in Express.
const port = process.env.PORT || '4000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Socket.io
io.on('connection', (socket) => {
  // Log whenever a user connects
  console.log('user connected');

  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on('message', (message) => {
    console.log('Message Received: ' + message);
    // io.emit('message', {type: 'new-message', text: message})
  });
});

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));

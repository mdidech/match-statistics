const express = require('express');
const { getCurrentMatchs } = require('./utils/fetchData');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io');
io = io(http);
let matchs = [];
app.use('/', express.static(__dirname + '/public'));

getCurrentMatchs().then((result) => {
  matchs = result;
  // console.log(matchs);
});
io.on('connection', (socket) => {
  console.log('user connected..');
  socket.emit('updateMatchs', matchs);
});

http.listen(5000, () => {
  console.log('Server is running on Port 5000');
});

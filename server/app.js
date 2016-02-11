var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var band = require('./band.js')();

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
app.get('/band.js', function(req, res){
  res.sendFile(__dirname + '/band.js');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

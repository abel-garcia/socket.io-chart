var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var array = [];

io.on('connection', function (socket) {  
  socket.on('emit-server', function (data) {
    console.log(data);
    array.push(data);
    io.emit('emit-server', array);
  });
  
});
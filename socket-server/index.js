var app = require('express')();
var server = require('http').Server(app);
// var io = require('socket.io')(server);
var passport = require('passport');
var GoogleStrategy = require('passport-google-auth').Strategy;

server.listen(8080);

passport.use(new GoogleStrategy({
  clientId: '542625437985-cr6hdsu074h0ucc3ju18oucc8i9g6koj.apps.googleusercontent.com',
  clientSecret: 'hDANSJQqq25Gsn14D_x0qB24',
  callbackURL: 'http://localhost:8080/auth/callback/google'
},
function(req, accessToken, refreshToken, profile, done) {
  console.log(req.user)
  console.log(accessToken)
  console.log(refreshToken)
  console.log(profile)
  //done(profile);
}
));

app.get('/login', passport.authenticate('google'));

app.get('/auth/callback/google', 
   passport.authenticate('google', { failureRedirect: '/login' }),
   function(req, res) {
       // Successful authentication, redirect to your app. 
       res.redirect('/');
   }
);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });



// var array = [];

// io.on('connection', function (socket) {  
//   socket.on('emit-server', function (data) {
//     console.log(data);
//     array.push(data);
//     io.emit('emit-server', array);
//   });
  
// });
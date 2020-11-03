const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = 3000;
const io = require('socket.io')(app.listen(port,() => console.log(`service listening on port ${port}`)));

const routerV1 = require('./router/v1.router');



app.use(cors())
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(express.static('public'));

/**
 * turn on sockect
 */
io.on('connect', socket => {
    const worker = require('./worker')
    console.log(`agent (${socket['handshake']['headers']['user-agent']}) connected on socket`);
    // call function EmmitData from worker.js
    worker.EmmitData(socket)();
});


routerV1(app);




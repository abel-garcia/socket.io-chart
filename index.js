const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const loader = require('./scripts/loader');


const routerV1 = require('./router/v1.router.js');
const port = 3000;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
routerV1(app);

app.listen(port,function () {
    console.log('service personal expenses is runing on port: '+port);
    loader.start();
});
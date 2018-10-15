const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/mobile-legend-heroes');
mongoose.Promise = global.Promise;

//initial bodyparser
app.use(bodyParser.json());

//initial routers
app.use('/api', routers);

//error middleware
app.use(function(err, req, res, send){
    res.status(422).send({err: err.message});
});

app.listen(5000,function(){
    console.log('express available!')
});

// This file act as a middleware: it combines the routes
// this file contain express code and this is helpful
// to make sure  that server code and express code are
// in two different locations 
const express = require('express');
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/lauches/lauches.router')
const cors = require('cors'); // this allows the cors to be used in our app
// this is acting as a middleware
// the express get request then the json check the json type
// then it passes that to routers
// routers get the information from controllers
// request comes in express then checheckes the type then goes to the planets
const app = express();
// each cors will be needed for cross side issues 
app.use(cors({
    origin: 'http://localhost:3000' // this means that allow only the request from 3000
}));
app.use(express.json());
app.use(planetsRouter);
app.use('/launches',launchesRouter);
// this star goes to find other matching end points in index.html 
// if it is not found in the route
//app.get('/*',(req,res)=>{
//res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); 
//})
module.exports = app;
// this file contain express code and this is helpful
// to make sure  that server code and express code are
// in two different locations 
const express = require('express'); 
const planetsRouter = require('./routes/planets/planets.router')
const cors = require('cors'); 
// this is acting as a middleware
// the express get request then the json check the json type
// then it passes that to routers
// routers get the information from controllers
const app = express(); 
// each cors will be needed for cross side issues 
app.use(cors({
    origin: 'http://localhost:3000'
})); 
app.use(express.json()); 
app.use(planetsRouter); 
module.exports = app; 

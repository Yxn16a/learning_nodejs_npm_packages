
const express = require('express'); 
const { 
    HttpGetAllLaunches,
} = require('./lauches.controller')
const launchesRouter = express.Router();
launchesRouter.get('/launches', HttpGetAllLaunches); 
module.exports = launchesRouter;

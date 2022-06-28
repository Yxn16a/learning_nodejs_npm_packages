// this files has planets routes
// router is also a middle ware 
const express = require('express');
// this shows that this file is coming from the planets 
const {
    httpGetAllPlanets,
 } = require('./planets.controller')
const planetsRouter = express.Router(); 
planetsRouter.get('/planets', httpGetAllPlanets); 
module.exports = planetsRouter; 
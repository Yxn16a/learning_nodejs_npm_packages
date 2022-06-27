// this files has planets routes
// router is also a middle ware 
const express = require('express');
// this shows that this file is coming from the planets 
const {
    getAllPlanets,
 } = require('./planets.controller')
const planetsRouter = express.Router(); 
planetsRouter.get('/planets',getAllPlanets); 
module.exports = planetsRouter; 

// This is business logic 
const { getAllLaunches,
        AddNewLaunch} = require('../../models/launches.model')
function httpGetAllLaunches(req, res) { 
    // this returns the array of the collection of map objects
   // return res.status(200).json(Array.from(launches.values())); taken to models
    return res.status(200).json(getAllLaunches())
};

function httpAddNewLaunch(req, res) { 
    const launch = req.body;
    // this will convert th 
    launch.launchDate = new Date(launch.launchDate)
    AddNewLaunch(launch); 
    return res.status(201).json(launch); 
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}
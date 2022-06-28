
// This is business logic 
const { getAllLaunches } = require('../../models/launches.model')
function HttpGetAllLaunches(req, res) { 
    // this returns the array of the collection of map objects
   // return res.status(200).json(Array.from(launches.values())); taken to models
    return res.status(200).json(getAllLaunches())
};
module.exports = {
    HttpGetAllLaunches,
}
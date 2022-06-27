const {launches} = require('../../models/launches.model')
function getAllLaunches(req, res) { 
    // this returns the array of the collection of map objects
    return res.status(200).json(Array.from(launches.values()));
}
module.exports = {
    getAllLaunches
}
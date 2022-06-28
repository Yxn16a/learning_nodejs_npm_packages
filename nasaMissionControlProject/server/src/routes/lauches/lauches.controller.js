// This is business logic 
const {
    getAllLaunches,
    AddNewLaunch,
    existsLaunchWithId,
    abortLaunchById
} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
    // this returns the array of the collection of map objects
    // return res.status(200).json(Array.from(launches.values())); taken to models
    return res.status(200).json(getAllLaunches())
};

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    // this will convert th 
    if (!launch.mission || !launch.rocket || !launch.launchDate ||
        !launch.target) {
        // 404 not fund
        return res.status(400).json({
            erro: "Missing required launch property",
        });
    }
    launch.launchDate = new Date(launch.launchDate)
    // validate the date by converting it toString
    // this is done when the date can not be converted toString
    // this is not a number checks i
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date"
        })
    }
    AddNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found',
        })
    }
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted)
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}
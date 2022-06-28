// this is data
const launches = new Map();
let latestFilightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket: ' Explorer IS1',
    launchdate: new Date('December 27th, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcaming: true,
    success: true
};
// this creates a map of launch and key of flight number 
launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}
// add new launch
function AddNewLaunch(launch) {
    latestFilightNumber++;
    launches.set(
        latestFilightNumber,
        Object.assign(launch, {
            flightNumber: latestFilightNumber,
            upcaming: true,
            success: true,
            customer: ['zero to mastery']
        }));
}

function abortLaunchById(launchId) {
    // save the aborted data
    const aborted = launches.get(launchId);
    aborted.upcaming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    AddNewLaunch,
    abortLaunchById
};
// controller must only already processed data instead of processing it 
// therefore, it is worth changing those details and keep them in the model
// like the following
// instead of exporting launches we do something: 

// this is data
const launches = new Map(); 
const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    rocket: ' Explorer IS1',
    launchdate: new Date('December 27th, 2030'),
    destingation: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcaming: true,
    success: true
};
// this creates a map of launch and key of flight number 
launches.set(launch.flightNumber, launch); 
function getAllLaunches() { 
    return Array.from(launches.values()); 
}
module.exports = {
    getAllLaunches, 
};
// controller must only already processed data instead of processing it 
// therefore, it is worth changing those details and keep them in the model
// like the following
// instead of exporting launches we do something: 
// 
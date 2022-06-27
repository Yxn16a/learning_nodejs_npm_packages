const launches = new Map(); 


const launch = {
    flightNumber: 100, 
    mission: 'kepler Exploration X',
    rocket: ' Explorer IS1',
    launchdate: new Date('December 27th, 2030'),
    destingation :'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcaming: true, 
    success: true
}
// this creates a map of launch and key of flight number 
launches.set(launch.flightNumber, launch); 
module.exports = {
    launches
}
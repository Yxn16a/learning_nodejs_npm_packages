// // this will return the set of plannets or array of planets
// // we  put model code in their own file because 
// // model can be used with several controllers
// // many models can be used by several controlers
// // controllers provides a data to the  api 
// const planets = [];
// module.exports = planets;

const path = require('path')
const {
    parse
} = require('csv-parse');
// streaming larger files
//  streaming: all steaming events are emitted using emmitter
// reading data line by line helps node to perform better
// it does not keep waiting while other data load
// instead it will process data as they come 
const habitableplanet = [];
// we ask if this  is the habbitable planet and its solor 
// receiving capabilities must range from 0.36 to 1.11 of the 
// earth's light
function ishabitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6;
}
const fs = require('fs'); // this will allow us to open and read file
// it also provide functionality to read streams
// let us read a file now 
// this create an event or the function bellow creates an event
// this gives us the low bite buffers 
function loadPlanetsData() {
    // this promise returns the data that are used when the 
    // server starts to listen on its terminal
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname,'..','..','data','kepler_nasa_data.csv'))
            // the following function pipe the stream together
            // of connected stream sorce  and destination
            // kepler_data.csv is source then destination is parse that 
            // gives us an array of rows
            .pipe(parse({
                // this tell the pipe that th comment character is #
                comment: '#',
                // returns each row as a key value pairs
                columns: true
            }))
            .on('data', async (data) => {
                // are going to push the data that comes in to the created array
                // let us add only a habitable planet
                if (ishabitable(data)) {
                    habitableplanet.push(data)
                }
            })
            .on('error', (err) => {
                console.log(err);
                // used to return the error that we received
                reject(err); 
            })
            // these are events handlers
            .on('end',() => {
                // lets us now look at the names of the obtained planet
                // especially those habbitable ones
                // NO NEED TO LOG OUR RESULT BECAUSE WE CAN DO THAT IN API
                // console.log(habitableplanet.map((planet) => {
                //     // filtering name
                //     return planet['kepler_name'];
                // }))
            
                const countPlanetsFound =  habitableplanet.length;
                console.log(`${countPlanetsFound} habitable planets found!`);
                resolve();


                // const countPlanetsFound = habitableplanet.length; 
                // console.log(`${countPlanetsFound} habitable planets found!`);
                // resolve();
                // console.log(`${habitableplanet.length} habitable planet found! `);
                // // resolve is only called when the data have already loaded
                // // we do not add anything in resolve because we have 
                // // array that we return above
                // resolve(); 
            });
    });
}
async function getAllplanets() { 
    return habitableplanet ; 
}

module.exports = {
    loadPlanetsData,
    getAllplanets
};
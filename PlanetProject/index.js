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
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}
const fs = require('fs'); // this will allow us to open and read file
// it also provide functionality to read streams
// let us read a file now 
// this create an event or the function bellow creates an event
// this gives us the low bite buffers 
fs.createReadStream('kepler_data.csv')
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
    .on('data', (data) => {
        // are going to push the data that comes in to the created array
        // let us add only a habitable planet
        if (ishabitable(data)) {
            habitableplanet.push(data)
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    // these are events handlers
    .on('end', () => {
        // lets us now look at the names of the obtained planet
        // especially those habbitable ones 
        console.log(habitableplanet.map((planet) => { 
            // filtering name
            return planet['kepler_name']; 
        }))
        console.log(`${habitableplanet.length} habitable planet found! `);
        console.log('done');
    });
// now we can find planets that are smillar to us
// we are making our back end to listn on port 8000 since our 
// front end is listenin to the port 3000
// this server we set it to depend to the environment
//

// we are going to start the server using http request 
// starting server with with built in server in node is better 
// because it adds some functionality of having server  respond to vast amount
// real time communcaction
// 
const http = require('http'); // this helps us to create http based server
// express is being used as middleware in this case 
const app = require('./app')
const { 
    loadPlanetsData
} = require('./models/planets.model')
const PORT = process.env.PORT || 8000;
// in this case the server will listen to any http send to app or to express
// listen fuction is obtained from express
//  this app is coming  from express or app.js file
// express here is acting as a middleware for the http request 
const server = http.createServer(app);

async function startServer() { 
    await loadPlanetsData(); 
    server.listen(PORT, () => {
        console.log(`Listening on port  ${PORT}....`)
    })
}
startServer();


// we are making our back end to listn on port 8000 since our 
// front end is listenin to the port 3000
// this server we set it to depend to the environment
//

// we are going to start the server using http request 
// starting server with with built in server in node is better 
// because it adds some functionality of having server  respond to vast amount
// real time communcaction
// 
const http = require('http'); 
// express is being used as middleware in this case 
const app = require('./app')
const PORT = process.env.PORT || 8000; 
// in this case the server will listen to any http send to app or to express
// listen fuction is obtained from express
const server = http.createServer(app); 
server.listen(PORT, () => { 
    console.log(`Listening on port  ${PORT}....`)
}) 

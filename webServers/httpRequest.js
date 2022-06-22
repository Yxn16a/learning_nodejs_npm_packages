const http = require('http');
const port = 3000;
// create server
// request is the message coming 
// the the reponse is what the server will do when the
// response returns back
const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        // using req we can look at the headers of the the message 
        // req: is a stream
        // res: writtable stream
        // res.writeHead(200, {
        //     // this used to tell node that return has to be plain text
        //     // however, one can change that by stating that he or she want the
        //     // json files. therefore we can pass objects to our end function
        //     // those objects will be returned whenever reponse is returned
        //     //'Content-Type': 'text/plain',
        //     'Content-Type': 'application/json',
        // });

        // We can also set the stus like the following
        // and we can set the header  one by one like in the following code
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');


        // end() means that the process is done and the result are ready to be sent
        //res.end("here you are making it") was used when our content was a text
        // the res function expec a string therefore, we will pass a string json file 
        // in it
        res.end(JSON.stringify({
            id: 1,
            name: 'sir Isac Newton'
        }))
    } else if (req.url === '/messages') {
        // this will help with wrtiting html peace by peace
        // this is because we used write keyword
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Isaaac !</li>');
        res.write('<li> what are your thought about Astronomy?</li>');
        // res.write('<li> Hello Isaaac !</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        // hello node, we are now done to write on that stream
        res.end();
    } else {
        res.statusCode = 404;
        // do not forget end() when the function ends to function
        res.end();
    }

});
// server listening to our local machine
// machine has local host in the browser
// in listen method :  we need to enter the port number
// the method that we pass in the the listen function 
// is the mthod that we call the call back. This function will start to run 
// when the serverstart listening
server.listen(port, () => {
    console.log(`I am listening to the port ${port}`)
});
// this will always give us the same message and what we want is
// the app responding dinamically
// you can pass 
//END POINTS ARE URLS THAT IS RESPONSIBLE FOR CERTAIN FUNCTION  IN THE APPLICATION 
//
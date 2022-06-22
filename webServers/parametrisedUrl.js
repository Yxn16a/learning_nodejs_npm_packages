// for extra notes in this file go look into httpRequest.js file

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    // we can hava parametrized urls 
    // the simple and the crazy way to find the id is doing something like
    // the following 
    const items = req.url.split('/'); // this will split the url
    // and we will pick the items[] arrays and use that to filter
    // like the following example:
    // if(items[1] ==='friends') then list out the friends
    // for example if url is localhost:3000/friend/1
    // the items array will be like the following
    //[localhost:300, friend, 1]
    // then we will take one and make it a number like the followin g
    // item = +item[2]

    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            name: 'sir Isac Newton',
            id: 2,
            name: 'sir Isac Newton',
            id: 3,
            name: 'sir Isac Newton',
        }))
    } else if (req.url === '/messages') {
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
server.listen(port, () => {
    console.log(`I am listening to the port ${port}`)
});
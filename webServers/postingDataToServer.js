// we use post to add data to servers
// post is mostly used 
// for extra notes in this file go look into httpRequest.js file

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    // this will split the url
    const items = req.url.split('/'); 
    if (req.method === 'POST' && items[1] === 'friends') { 
        req.on('data', (data) => { 
            const friend = data.toString(); 
            console.log('Request:', friend);
            friends.push(JSON.parse(friend)); 
        })

    }else if ( req.method ==='GET' && req.url === '/friends') {
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
    } else if (req.method ==='GET'&&req.url === '/messages') {
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
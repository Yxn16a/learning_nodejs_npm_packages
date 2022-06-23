// middleware: special functions that runs between the request and the re
// response 
// how to middle ware look like 
// app.use( funct(req, res, next)=>{

//})
// next: used to call next middlewared 
// next function calls next middle ware to  switch on the next middle ware
// downsream middle ware is the endpoint of the middle ware and this is where
// get and post methodes are
// downstream middleware gives back the response to other middlewares

const express = require('express');
// this is express is exported from express package  
const app = express();
const PORT = 3000;
const friends = [{
        id: 0,
        name: 'Sir Isaac Newton'
    },
    {
        id: 1,
        name: 'Albert Anstain'
    },
    {
        id: 2,
        name: 'Alendar Bhor'
    }
];
// this a middleware function
// since this is a middleware then we will need to call 
// the next middleware wich will be downstreammiddleware
// 
app.use((req, res, next) => {
    const start = Date.now();
    // this helps to move to the next function when writing middle ware
    next();
    // actions go here... and then the action will be sent to the post man
    //this will give us the amount of time that the middleware request took
    const delta = Date.now() - start;
    // this prints wich method was use and the url that was used
    // post man time is longer than in express because it takes
    // longer to send the request and getting back a response from
    // express
    //while express get the data right away from middleware and does 
    // not need to make long trips as what post man makes
    console.log(`${req.method} ${req.url} ${delta}ms`);

})
app.get('/friends', (req, res) => {
    // express will sent content type
    res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
    // convert 
    const friendId = Number(req.params.friendId);
    // assign the passed if to the friend id 
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
})
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}....`);
})
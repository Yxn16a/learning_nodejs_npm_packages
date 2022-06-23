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
// this middleware calculate the request and response time 
app.use((req, res, next) => {
    const start = Date.now();
    // this helps to move to the next function when writing middle ware
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})
// json parsing middle ware must go here
// this middle ware changes the data to json before parsing the data
app.use(express.json());

app.post('/friends', (req, res) => {
    if (!req.body.name) {
     return   res.status(400).json({
            error: "Missing friend name"
        })
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);
    // this is keeping up with the idea of having everything return 
    // json files as we have it at each end point
    res.json(newFriend);
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
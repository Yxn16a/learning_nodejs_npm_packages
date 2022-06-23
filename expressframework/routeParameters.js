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
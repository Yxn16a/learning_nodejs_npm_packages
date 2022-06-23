const express = require('express');
// this is express is exported from express package 
const friendsController = require('./controllers/friends.Controller');
const messagesController = require('./controllers/messages.Controller'); 
const app = express();
const PORT = 3000; 
app.use(express.json()); // this convert the data to json files 
app.get('/friends', friendsController.getFriends); 
app.post('/friends', friendsController.postFriend);
app.get('/friends/:friendId', friendsController.getFriend); 

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => { 
    console.log(`Server listening at ${PORT}....`); 
})
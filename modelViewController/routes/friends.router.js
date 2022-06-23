// this is houw we create a router
const express = require('express');

const friendsController = require('../controllers/friends.Controller');

const friendsRouter = express.Router();
// we can create our middle ware here  in this router when a friend logs in
friendsRouter.use((req, res, next) => { 
    // this will return the ip address 
    console.log(`ip address ${req.ip}`)
    next(); 
})
friendsRouter.use(express.json()); // this convert the data to json files
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/:friendId', friendsController.getFriend);
module.exports = friendsRouter;
const model = require('../models/friends.model');

function postFriend(req,res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        })
    }
    const newFriend = {
        id: model.length,
        name: req.body.name
    };
    model.push(newFriend);
    // this is keeping up with the idea of having everything return 
    // json files as we have it at each end point
    res.json(newFriend);
};

function getFriends(req, res) {
    // express will sent content type
    res.json(model);
}

function getFriend(req, res) {
    // convert 
    const friendId = Number(req.params.friendId);
    // assign the passed if to the friend id 
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}
module.exports = {
    postFriend,
    getFriends,
    getFriend
}
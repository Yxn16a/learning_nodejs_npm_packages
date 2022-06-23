// this allows us to go to anypath on any machine 
const path = require('path');

// we use keyword function when we are defining the function at the top 
// of the file
// defining functions at the top of the file is very crutial because
// in case there is an error then we can see where things failured
function getMessages(req, res) {
    //__dirname: gives the folder where the current name lives
    // currently __dirname is pointing to the controller
    // folder where this calling file lives
    res.send('.')
    res.sendFile(path.join(__dirname,'public','images','alps.jpg'));
    // if we want to send  file to the user we can use 
    // the following function

    //res.send('<ul><li>Hell albert!</li></ul>')
     //not sending 
    // this now
}

function postMessages(req, res) {
    console.log('updating message...');
}

module.exports = {
    getMessages,
    postMessages
}
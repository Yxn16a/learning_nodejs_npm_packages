// we use keyword function when we are defining the function at the top 
// of the file
// defining functions at the top of the file is very crutial because
// in case there is an error then we can see where things failured
function getMessages(req, res) { 
    res.send('<ul><li>Hell albert!</li></ul>')
}

function postMessages(req, res) { 
    console.log('updating message...'); 
}

module.exports = {
    getMessages, 
    postMessages
}

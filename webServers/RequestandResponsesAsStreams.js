// streams can be piped and stream them to be used in other place
// you can pump your data from request  to responses
// because node uses streams, you can do something like this
// fetch('http:// local host :3000/friends',{
    // method: 'post',
    // body: JSON.stringfy({id: 4, name : 'Grace Hopper'})
//})
// .then((response)=> response.json()
// .then((friend)=> console.log(friend))
// no need to call req.end(); when pipes is used
// we have been writing code as if we are the first to write nodes
// Node js FrameWorks is express
// PLEASE COME BACK HERE TO UNDERSTAND THE STREAMS AND HTTPS 
//lECTURE 78,79,80

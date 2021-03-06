const express = require('express');
const path = require('path');
// this is express is exported from express package 
const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/message.router');

const app = express();
// this set the app to lander pages using hbs engine 
app.set('view engine', 'hbs');
// this will take us to view folder
app.set('views', path.join(__dirname,'views'))
// this middleware calculate the request and response time 
app.use((req, res, next) => {
    const start = Date.now();
    // this helps to move to the next function when writing middle ware
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})
// used when we want to serve a web pages with static content from public folder
// hosting your file locally is not great except for small projects
app.use('/site', express.static(path.join(__dirname, 'public')));

// this is called mounting the paths
// this makes express to know our code
// routers make it self contained routers
app.get('/', (req, res) => {
    res.render('index', {
        title: 'myfriends are very clever',
        caption: 'Let \'s go skiing!'
    });
})
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}....`);
})
// router is like miniapplication 
// has its own midle ware
// t
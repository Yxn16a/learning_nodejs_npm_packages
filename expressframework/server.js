const express = require('express');
// this is express is exported from express package  
const app = express();
app.get('/', (req, res) => {
    res.send('hellooooooo world'); 
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert</li></ul>' ); 
});

app.post('/messages', (req, res) => {
    console.log("Updating messages...."); 
});

const PORT = 3000; 
app.listen(PORT, () => { 
    console.log(`Server listening at ${PORT}....`); 
})
// Express is good at routing
// it does go through the 
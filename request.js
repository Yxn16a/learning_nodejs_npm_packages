// this downloads all the modules in node_modules
// lock.json tracks library
// this can be added to the package.json to start it in the terminal 
const axios = require('axios');
axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        // this filters an error
        // which is much easier to read
        console.log(err);
    }) 
    .then(() => {
        console.log('all done message')
    });
    //node_modules: 
    // contains all the modules from npm
    // follow-redirects: contains all code for that package
    // our dependency create a dependency tree
    // npm modules are not shared when the project is being shared
    // instead it will be downlaoded when modules is shared
    
    // Semantic Version will be used in the next section
    

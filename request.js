// this downloads all the modules in node_modules
// lock.json tracks library
// this can be added to the package.json to start it in the terminal 
const axios = require('axios');
axios.get('https://www.wikipedia.com')
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

// Semantic Versioning( this is the package versiong)
// the version looks like the following
// Major. Minor. Path
// the Major: this changes the whole package
// minor: this changes some functionality of the packages(decently but they do not
// break functionality)
//Patch: smaller bag fixes
//in json files follow Semantic Versioning
// therefore use the well supported the packages

// package-lock.json:
// include dependences and where the dependency are coming from
// keeps track the version of packages
// ^ this curret used in the the ^0.21.1 this is used to make sure
// to find path version use ~
// the other programmer to use the same dependencies therefore
// the program will run as it is running on our app
// the pakcage lock: helps us to run the same application all over
// keep the application secure by updating
// -- npm audit: used to show the problems in the packages
// npm audit  fix is used to fix those worning from the problems above
// if the library is not in a good shape or secure then change it

// Two json files from
// json file from under script:
// "start": "node request.js",
// "dev": "nodemon request.js",

// woking with our planet data

const cp  = require('child_process');

// cp.execSync('code');
// console.log("child_process running");


// cp.execSync('start firefox'); // not working on linux

console.log(""+cp.execSync('node test.js'));
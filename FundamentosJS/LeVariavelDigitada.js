var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your name?", function(asnwer){
    console.log(asnwer);
});

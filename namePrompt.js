const readlineSync = require('readline-sync')
yourname = readlineSync.question('What is your name? ');
    console.log('Hello ' + yourname +'!' );

favfood = readlineSync.question('What is your favourite food? ', {
    hideEchoBack: true
});
console.log('Oh ' + yourname + ' loves ' + favfood + '!'); 


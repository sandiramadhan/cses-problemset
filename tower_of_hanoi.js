const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {

    res = parseInt(res);
    
    
    readline.close();

})
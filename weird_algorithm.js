const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {
    
    let msg = `${res}`;
    while(true) {
        if(res%2 === 0) {
            res = res / 2;
        } else {
            res = res*3 + 1;
        }
        msg += ` -> ${res}`;
        if(res <= 1) break;
    }

    console.log(msg);
    readline.close();
})
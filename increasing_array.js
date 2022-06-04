const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    const arr = res.split(' ');
    for(let i = 1; i <= arr.length; ++i) {
        let c = arr[i];
        let cNext = arr[i + 1] != undefined ? arr[i + 1] : 0;

        if(cNext > 0) {
            if(cNext < c) console.log(c);
        }
    }
    
    readline.close();
})
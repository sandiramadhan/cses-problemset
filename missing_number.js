const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    const arr = res.split(' ');
    const max = Math.max(...arr);
    
    let missingNumber = 0;
    for(let i = 1; i <= max; ++i) {
        if(!arr.includes(i?.toString())) missingNumber = i;
    }
    console.log(missingNumber);
    readline.close();
})
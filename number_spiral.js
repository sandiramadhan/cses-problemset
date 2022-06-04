const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {
    
    const spiral = [
        [1,2,9,10,25],
        [4,3,8,11,24],
        [5,6,7,12,23],
        [16,15,14,13,22],
        [17,18,19,20,21],
    ]

    const arr = res.split(' ');

    if(arr.length >= 2) {
        const f = parseInt(arr[0]) - 1;
        const s = parseInt(arr[1]) - 1;
        console.log(spiral[f][s]);
    }
    
    readline.close();
})
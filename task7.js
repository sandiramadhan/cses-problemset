const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    res = parseInt(res);
   
    for(let k = 1; k <= res; ++k) {
        let a1 = k*k;
        let a2 = a1*(a1 - 1)/2;

        if(k>2) a2 -= 4*(k-1)*(k-2);
        console.log(a2);
    }
    
    readline.close();
})
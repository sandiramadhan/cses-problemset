const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    res = parseInt(res);
    let odd = [];
    let even = [];

    for(let i = res; i >= 1; --i) {
        if(i%2 === 0 && i != res) {
            even.push(i);
        } else if(i != res) {
            odd.push(i);
        }
    }

    if(odd?.length <= 1 || even?.length <= 1) {
        console.log('NO SOLUTION');
        readline.close();
        return
    }

    let print = '';
    even.map((v, _) => print += `${v} `);
    print += res;
    odd.map((v, _) => print += ` ${v}`);
    console.log(print);
    
    readline.close();
})
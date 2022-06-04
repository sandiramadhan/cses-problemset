const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {

    res = parseInt(res);
    let f = 0;

    for(let i=1; i<=res; ++i) {
        if(f == 0) f=1;
        f *= i;
    }

    f=f.toString();
    let c=0;
    let cString='';
    for(let i=0; i<f.length; ++i) {
        if(cString == f[i]) {
            ++c;
        } else {
            cString=f[i];
            c=1;
        }
    }

    console.log(f, cString, c);
    readline.close();

})
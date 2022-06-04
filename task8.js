const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    res = parseInt(res);
    let f = Math.ceil(res / 2);
    let s = res - f;
    let loop = 0
    let possible = false;

    while(loop <= (res*2)) {
        let arrF = [];
        let arrS = [];
        
        for(let i=1; i<=f; ++i) {
            while(true) {
                let randomF = Math.ceil(Math.random() * res);
                if(!arrF.includes(randomF)){
                    arrF.push(randomF);
                    break
                }
            }
        }

        for(let b=1; b<=s; ++b) {
            while(true) {
                let randomS = Math.ceil(Math.random() * res);
                if(!arrS.includes(randomS) && !arrF.includes(randomS)){
                    arrS.push(randomS);
                    break
                } 
            }
        }

        let totalF = 0;
        let totalS = 0;
        arrF.map((v,_) => totalF += v);
        arrS.map((v,_) => totalS += v);
        
        if(totalF == totalS) {
            let cnslString = 'YES\n'
            cnslString += `${f}\n`;
            arrF.map((v,_) => cnslString += `${v} `);
            cnslString += `\n${s}\n`;
            arrS.map((v,_) => cnslString += `${v} `);
            console.log(cnslString)

            possible = true;
            break
        } else {
           ++loop;
        }
    }

    if(!possible) console.log('NO');
    readline.close();
})
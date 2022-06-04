const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {
    
    res = parseInt(res);

    let sArr = [];
    for(let i=1; i<=res; ++i) {
        sArr.push(0);
    }
    
    let total = 1;
    while(true) {
        for(let i=(sArr.length-1); i>=0; --i) {
            if(sArr[i] == 0) {
                sArr[i] = 1;
                break;
            } else {
                let _tmpi = i;
                sArr[i] = 0;
                while(true) {
                    --_tmpi;
                    if(sArr[_tmpi] != undefined && sArr[_tmpi] == 0) {
                        sArr[_tmpi] = 1;
                        for(let b=(_tmpi+1); b<=(sArr.length-1); ++b) {
                            if(sArr[b] != undefined) sArr[b]=0;
                        }
                        break;
                    } else if(_tmpi<0) {
                        break
                    }
                }
                break;
            }
        }

        ++total;
        if(!sArr.includes(0)) break;
    }
    
    console.log(total);
    readline.close();
});
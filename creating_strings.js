const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {

    let strings = [];
    let breakpoint = (res.length*res.length)-res.length;
    while(true) {
        let _s = ``;
        let _rndStore = [];
        while(true) {
            let _rnd = Math.floor(Math.random()*res?.length)
            if(!_rndStore.includes(_rnd)) {
                _rndStore.push(_rnd);
                _s += res[_rnd];
            }
            if(_rndStore.length == res.length) break;
        }

        if(!strings.includes(_s)) strings.push(_s);
        if(strings.length >= breakpoint) break;
    }

    console.log(strings.length)
    strings.map((v,_) => console.log(v));
    
    readline.close();
})


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {

    res = res.toString();
    
    let attempt=0;
    while(true) {
        let arr=[]

        while(arr.length<res.length) {
            let rnd=Math.ceil(Math.random()*res.length);
            if(!arr.includes(rnd)) arr.push(rnd);
        }

        let forwards='';
        let backwards='';
        arr.map((v,_) => {
            forwards+=res[v-1];
            backwards=`${res[v-1]}${backwards}`;
        });
        
        ++attempt;
        if(forwards==backwards) {
            console.log(forwards); 
            break
        }
    }

    console.log('total attempt', attempt);
    readline.close();
})
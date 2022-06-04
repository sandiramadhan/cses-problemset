const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`input: `, res => {

    let c = res.split('');
    let strClean = Array.from(new Set(res.split(''))).toString();
    let arrClean = strClean.split(',');

    let arrCount = [];
    arrClean.map((v,_) => {
        let d = {
            str: v,
            count: 0
        }
        c.map((val, _) => {
            if(val == v) ++d.count;
        })
        arrCount.push(d)
    })

    console.log(Math.max(...arrCount.map(e => e.count)));
    readline.close();
})
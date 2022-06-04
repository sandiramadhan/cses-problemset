const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {

    res=parseInt(res);
    let sArr=[]
    while(sArr.length<res) sArr.push(0)

    let total=0
    console.log(sArr)
    while(total<((res*2)-1)) {
        for(let i=(sArr.length-1); i>=0; --i) {
            if(sArr[i] == 0) {
                sArr[i]=1;
                break
            } else {
                let _mnsi=i
                while(true) {
                    --_mnsi
                    if(sArr[_mnsi] != undefined && sArr[_mnsi] == 0) {
                        sArr[_mnsi]=1;
                        break
                    } else if(sArr[_mnsi] != undefined && sArr[_mnsi] == 1) {
                        sArr[_mnsi+1]=0
                    } else if(sArr[_mnsi] == undefined) {
                        break
                    }
                }
                break;
            }
        }
        ++total
        console.log(sArr)
    }
    readline.close();
})
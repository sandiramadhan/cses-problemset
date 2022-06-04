const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input: ', res => {
    
    const arr = res.split(' ');

    let output = '-';
    while(true) {
        if(arr[0] >= arr[1]) {
            arr[0] -= 2;
            arr[1] -= 1;
        } else {
            arr[1] -= 2;
            arr[0] -= 1;
        }
        
        if(arr[0] < 0 && arr[1] < 0) {
            output = 'NO'
            break
        } else if(arr[0] == 0 && arr[1] == 0) {
            output = 'YES'
            break
        }
    }

    console.log(output);
    readline.close();
})
for(let n = 10000; n <= 150000; n++){
    if (String(n)[1] === '2'){
        if (((n - 1) + (n - 2) + (n - 3)) % 100 === 52) {
            console.log(n);
        }
    }
}

for (let i = 1e5 + 3; i <= 15e4; i++) {
    if ((3 * i - 6) % 100 == 52 && String(i)[1] == 2) {
        console.log(i);
    }
}
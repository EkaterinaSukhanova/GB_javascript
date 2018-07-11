function foo (a) {
    let multiplication = a;
    let inner = function (b) {
        if (b) {
            multiplication *= b;
            return inner;
        } else {
            return multiplication;
        }
    };
    return inner;
}

console.log(foo(5)(6)());
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

let result = 1;
function foo2 (arg) {
    if (arg === undefined) {
        return result;
    }
    result = result * arg;
    return foo2;
}
console.log(foo2(4)(6)());
'use strict';
let a = 10;
let s = 's';
s += a;

let b = 2;
b++;
b += 1;
b = 1 + b;

let li = [1, 2, 3, 4, 5, 6, 7, 8];
li.splice(3, 3);
li.push(10, 5e9);

let ob = {
    numbers: ''
};

let stringArr = li.join('; ');
ob.numbers = stringArr;
stringArr = stringArr + ' ; ' + li[5] + ' ; ' + li[5];
ob.newNumbers = stringArr;
console.log(ob.newNumbers);


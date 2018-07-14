'use strict';

class Bird {

    constructor(name){
        this.name = name;
        this.points = 0;
        this.wasEaten = false;
    }

}

let arrayBirds = [];
let amount = 10;

for (let i = 0; i < amount; i++) {
    let bird = new Bird("Bird" + (i + 1));
    arrayBirds.push(bird);
}

let min = 0;
let max = amount - 1;

while (arrayBirds.length !== 1) {
    let rand1 = min + Math.floor(Math.random() * (max + 1 - min));
    let rand2 = min + Math.floor(Math.random() * (max + 1 - min));

    if (rand1 !== rand2) {
        arrayBirds[rand1].points++;
        arrayBirds[rand2].wasEaten = true;
    }

    for (let i in arrayBirds) {
        if (arrayBirds[i].wasEaten === true) {
            arrayBirds.splice(i, 1); //начиная с позиции i удалить один элемент
            max--;
        }
    }
}

console.log(arrayBirds);


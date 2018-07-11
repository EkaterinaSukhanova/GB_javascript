let fedorPoints = 22;
let petrPoints = 22;

if (fedorPoints > 21 || petrPoints > 21) {
    if (fedorPoints > 21 && petrPoints <=21) {
        console.log('Петр выиграл');
    }
    else if (fedorPoints <= 21 && petrPoints > 21) {
        console.log('Федр выиграл');
    }
    else {
        console.log('Победителя нет');
    }
}
else {
    if (fedorPoints > petrPoints) {
        console.log('Федор выиграл');
    }
    else if (petrPoints > fedorPoints) {
        console.log('Петр выирал');
    }
    else {
        console.log('Ничья');
    }
}

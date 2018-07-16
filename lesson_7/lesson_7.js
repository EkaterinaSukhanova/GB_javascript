'use strict';


class Birds {
    constructor(name) {
        this.name = name;
    }

    checkProperty(bird) {
        console.log("in check");
    }

    static checkPropertyStatic() {
        console.log("in check static");
    }

}
//
// let ob = {
//   value1: 234,
//   value2: 456
// };
//
// if (ob.hasOwnProperty("value1")) {
//     console.log(ob.value1);
// }
//
// console.log(Obconstject.keys(ob));

Birds.checkPropertyStatic();

// Variables in TypeScript

var number = 1;
let count = 2; // compiles into var

// Variable scope is no longer accessible by functions in TS
function doSomething() {

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    //In normal JS, this would be ran and the counter from the
    // scoped variable i in the for loop would actually display.
    // console.log("Finally: " + i);

    for (var k = 0; k < 5; k++) {
        console.log(k);
    }

    console.log(k);
}

doSomething();

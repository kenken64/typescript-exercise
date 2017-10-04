/*
//let x: 'Hello';

//a = 'Hello';
//x = 'Hello World';
//b = undefined;
//c = null;

let x: 'Hello' | 'Hello World' | 'Hello World!';

x = 'Hello World!';

console.log(x);

let myAdd = function(x:string | number, y:string | number): number{
    if(typeof x == 'string'){
        x = parseInt(x, 10);
    }

    if(typeof y == 'string'){
        y = parseInt(y, 10);
    }

     return x + y; 
}

console.log(myAdd(5,'4'));
*/



//Create a new type
type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection){
    console.log('Moving '+distance+' Miles '+direction);
}

//The string must  belong to the type CardinaDirection
move(15, 'South');


//OR
//When the variable is undefined or null, the terminal will just simply output undefined or null
let x: 'Hello' | 'Hello World' | 'Hello World!';
let a: 'Hello' | 'Hello World' | 'Hello World!';
let b: 'Hello' | 'Hello World' | 'Hello World!';
let c: 'Hello' | 'Hello World' | 'Hello World!';
x = 'Hello World!';
a = 'Hello';
c = null;

console.log(x);
console.log(a);
console.log(b);
console.log(c);


//The arguments x and y can be whether string or number
// but it finally return to the type number
//  use parseInt to force string type to numbr type if it is a string type
let myAdd = function(x:string | number, y:string | number): number{
    if(typeof x == 'string'){
        x = parseInt(x, 10);
    }

    if(typeof y == 'string'){
        y = parseInt(y, 10);
    }

     return x + y; 
}
console.log(myAdd(5,'4'));




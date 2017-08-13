/*
//let x: 'Hello';

//x = 'Hello';
//x = 'Hello World';
//x = undefined;
//x = null;

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

type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection){
    console.log('Moving '+distance+' Miles '+direction);
}

move(15, 'Southwest');
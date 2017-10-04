//Wrong:
//function's return type is void so it can not return anything
//function logData():void{
//    console.log('Here is some data');
//    return 'Some data';
//}
//logData();

//Declaring variables of type void means it can only be assigned as
//  undefined or null
let first: void = null;
console.log(first);

//second has type undefined and value undefined
let second: undefined = undefined;
//third has type null and value null
let third: null = null;
console.log(second);
console.log(third);


//function error throw an expression so its return type is never
function error(message:string):never{
    throw new Error(message);
}

//call the function error
error('Something happened');


//function infLoop have unreachable end point 
//  so its return type can be error
function infLoop():never{
    while(true){
        //this won't execute
        console.log('Hello');
    }
}

//Wrong:
//function's return type is never so it's end point can't be reached
//function doSomething():never{
//    return 'Hello';
//}

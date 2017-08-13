/*
function myStrictFunc(arg: number): number{
    return arg;
}

function myAnyFunc(arg: any): any{
    return arg;
}

function myGeneric<T>(arg: T): T{
    return arg;
}

let x = myGeneric<string>('Hello World'); // Output = string
let y = myGeneric<number>(44); // Output = number
let z = myGeneric('Hello World'); // Output = string
console.log(z);

// MULTIPLE ARGS
function myGeneric<T>(arg1: T, arg2: T){
    let str = arg1+' '+arg2;
    return str;
}

let x = myGeneric('Hello', 'World');
console.log(x);


// ARRAYS
function myGeneric<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

let x = myGeneric([1,2,3]);
console.log(x);
*/
function myGeneric(arg) {
    return arg;
}
var x = myGeneric;
console.log(x(12));

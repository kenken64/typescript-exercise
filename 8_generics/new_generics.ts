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

let b = myGeneric<string>('Hello World'); // Output = string
let a = myGeneric<number>(44); // Output = number
let z = myGeneric('Hello World'); // Output = string
console.log(z);

// MULTIPLE ARGS
function myGenericnew<T>(arg1: T, arg2: T){
    let str = arg1+' '+arg2;
    return str;
}

let f = myGenericnew('Hello', 'World');
console.log(f);


// ARRAYS
function myGeneric<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

let x = myGeneric[1,2,3]);
console.log(x);
*/


//T is the type variable, we use it to capture the type of the argument
//Pass in T, return to T
// INTERFACES
interface MyGenericFn{
    <T>(arg: T): T;
}
//define a function whose argument type is T and the return type is T
function myGeneric<T>(arg: T): T{
    return arg;
}
//declare x follow the interface MyGenricFn, whose function body is myGeneric
let x: MyGenericFn = myGeneric;
//pass 12 to the function x, and print it
console.log(x(12));





//When the argument is number, return to number
function myStrictFunc(arg: number): number{
    return arg;
}
let a = myGeneric<number>(44); // Output = number
console.log(a);


//Can pass any type
//But we can not get the information about what the types when the function returns
function myAnyFunc(arg: any): any{
    return arg;
}
let b = myGeneric<string>('Hello World'); // Output = string
let z = myGeneric('Hello World'); // Output = string
console.log(b);
console.log(z);

//Can pass any type
//We can also denote what type was when the function returns
function myGenericT<T>(arg: T): T{
    return arg;
}
let d = myGeneric('Hello World'); 


// MULTIPLE ARGS
//when pass multiple arguments and they are the same type
function myGenericnew<T>(arg1: T, arg2: T){
    let str = arg1+' '+arg2;
    return str;
}

let f = myGenericnew('Hello', 'World');
console.log(f);

//Array
//The array of the type varaible
//Array has a length, so no error
function myGenericArray<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

let g = myGenericArray([1,2,3]);
console.log(g);




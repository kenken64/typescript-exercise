////NUMBERS////

//declare Int to be a number
let Int: number;
//set Int to be 5
Int = 5;                // Integer
console.log(Int);

//declare dec to be a number
let dec: number;
//set dec to be 2.3
dec = 2.3;              // Decimal
console.log(dec);

//declare pre to be a number
let pre: number;
//let pre to be the sum of 5 and 5
pre = 5 + 5;            // Expression
console.log(pre);

//declare exp to be a number
let exp: number;
//let exp to be 120000
exp = 12e4;             // Exponent
console.log(exp);

//declare RF to be a number
let RF: number;
//let RF to be a random pseudorandom number between 0 and 1
RF = Math.random();    // Random Function
console.log(RF);

//declare Hex to be a number
let Hex: number;
//let Hex to be a 61453
Hex = 0xf00d;           // Hex
console.log(Hex);

//declare Bi to be a number
let Bi: number;
//let Bi to be 10
Bi = 0b1010;           // Binary
console.log(Bi);

//declare Oct to be a number
let Oct: number;
//let Oct to be 484
Oct = 0o744;            // Octal
console.log(Oct);

//Wrong:
//let x: number;
//x = 'Hello World';
//string type value is not assignable to type number


////STRINGS////

//declare str1 to be a string
let str1: string;
//let str1 to be 'Hello World'
str1 = 'Hello World';            // String
console.log(str1);

//declare str2 to be a string
let str2: string;
//let str2 to be the combination of 'Hello', ' ' and 'World'
str2 = 'Hello' +' '+ 'World';    // Concatenated String
console.log(str2);

//declare str3 to be a string
let str3: string;
//let str3 to be the result of function slice with parameters 0, 2
//  which get string 'Hello World' from index 0 to index 2
str3 = 'Hello World'.slice(0, 2);  // Function Result
console.log(str3);

//Wrong:
//let str4: string;
//str4 = 5;
//number type value is not assignable to type string


////BOOLEANS////

//declare bo1 to be a boolean
let bo1: boolean;
//let bo1 to be true
bo1 = true;
console.log(bo1);

//delare bo2 to be a boolean
let bo2: boolean;
//let bo2 to be false
bo2 = false;
console.log(bo2);

//delare bo3 to be a boolean
let bo3: boolean;
//let bo3 to be undefined
bo3 = undefined;
console.log(bo3);

//delare bo4 to be a boolean
let bo4: boolean;
//let bo4 to be null
bo4 = null;
console.log(bo4);

//Wrong:
//let bo5: boolean;
//bo5 =5;
//number type value is not assignable to type boolean

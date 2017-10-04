/*
let x: number[];
let y: string[];
let z: boolean[];

//x = [1,2,3];
//y = 1;
//z = ['Hello', 1];
//a = [1,2,3];
//b = ['Hello', 'World'];
c = [true, false, 1];

console.log(z);

let x: Array<number>;
let y: Array<string>;
let z: Array<boolean>;

//x = [1,2,3];
//x = ['Hello'];
y = ['Hello'];

console.log(y);
*/

//Output the last 4 characters of the first word
let x: [string, number];
//x = ['Hello', 'World'];
x = ['Hello', 5, 'World', 4,5,6];
console.log(x[0].substr(1));

//Output the number 1
let y: number;
y= 1;
console.log(y);

//Output the string 'Hello' and number 1
let z: [string, number];
//z = ['Hello', 1];
z = ['Hello', 1];
console.log(z[0]);
console.log(z[1]);

//Output number array 123
let a: [number];
//a = [1,2,3];
a = [1,2,3];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

//Output the two charaters Hello and World
let b: [string];
//b = ['Hello', 'World'];
b=['Hello', 'World'];
console.log(b[0]);
console.log(b[1]);


//Output the first, second and the third elements of the number and boolean array
let c: [boolean, number];
//c = [true, false, 1];
c=[true, false, 1,0,1];
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);










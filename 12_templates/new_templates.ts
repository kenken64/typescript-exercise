//Declare three variables and send them value
let greet = 'Hello World';
let num1 = 5;
let num2 = 3;

//The function of adding two numbers
let total = (num1:number, num2: number): number => num1+num2;

//call the function total
//print the tempalte
let template:any = `${greet}, This is my template 
in typescript. ${num1} + ${num2} = ${total(num1, num2)}`;
console.log(template);
//To see whether the first word is Hello
console.log(template.startsWith('Hello'));

//To see whether it is ended with 81
console.log(template.endsWith(81));

//To see whether the template includes This is not
console.log(template.includes('This is not'));
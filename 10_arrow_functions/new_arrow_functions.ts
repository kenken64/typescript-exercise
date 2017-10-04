/*
let getUser = function(name):string{
    return name;
}

let getUser = (name:string):string => {
    return name;
};

console.log(getUser('Harry Williams'));

let add = function(num1:number, num2: number): number{
    return num1+num2;
}

let add = (num1: number, num2:number): number => num1+num2;

console.log(add(1,3));

var User = {
    name:'John Doe',
    age: 25,
    startAging: function(){
        var self = this;
        setInterval(function(){
            self.age++;
            console.log(self.age);
        },1000);
    }
}
*/

//Every 1 second, call the function in the var User1, and the age increases 1
var User1 = {
    name:'John Doe',
    age: 25,
    startAging: function(){
        var self = this;
        setInterval(function(){
            self.age++;
            console.log(self.age);
        },1000);
    }
}
User1.startAging();

//Every 1 second, call the function in the var User, and the age increases 1
//Use the arrow function 
var User = {
    name:'John Doe',
    age: 25,
    startAging: function(){
        setInterval(() => {
            this.age++;
            console.log(this.age);
        },1000);
    }
}
User.startAging();




//An arrow function expression has a shorter syntax than a function  expression
//and does bind its own this, arguments,super, or new.target.
//These function expression are best suited for non-method functions
let getUser = function(name):string{
    return name;
}
let getUser1 = (name:string):string => {
    return name;
};
console.log(getUser('Harry Williams'));
console.log(getUser1('Harry Poter'));

//Calculate the result of two numbers' sum
let add = function(num1:number, num2: number): number{
    return num1+num2;
}
//use the arrow function
let add1 = (num1: number, num2:number): number => num1+num2;

console.log(add(1,3));
console.log(add1(2,3));

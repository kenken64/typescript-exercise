/*
function add(x:number, y:number):number{
    return x + y;
}

let myAdd = function(x:any,y:any): number{
    if(typeof x == 'string'){
        x = parseInt(x, 10);
    }

    if(typeof y == 'string'){
        y = parseInt(y, 10);
    }

     return x + y; 
}

//console.log(add(5,5));
console.log(myAdd('4',4));
*/

/*
function getName(firstName: string, lastName?: string): string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName+' '+lastName;
}
*/



//When you don't know how many parameters will be passed in
// you can collect the rest of the parameters into one array
//...parameter referred to as a rest parameter
function getFullName(firstName:string, ...restOfName: string[]){
    return firstName+ ' '+restOfName.join(' ');
}
//Call the function
let name1 = getFullName('John', 'Doe','Williams','Johnson', 'Jackson');

console.log(name1);


//To see whether the lastName is defined.
// If the lastName is not a string, it can't pass to the if statement
//  If the lastName is undefined , just return to the firstName
function getName(firstName: string, lastName?: string):string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName+' '+lastName;
}

let name2=getName('John','Doe');
let name3=getName('John');
//let name4=getName('John','Doe','Williams');
// We can't pass more than two name

console.log(name2);
console.log(name3);


//Add two numbers
function add(x:number, y:number):number{
    return x + y;
}
let add1=add(5,5);
console.log(add1);


//If one of the varaible is the string type
// We cann use this function to force it to be the number type
let myAdd = function(x:any,y:any): number{
    if(typeof x == 'string'){
        x = parseInt(x, 10);
    }

    if(typeof y == 'string'){
        y = parseInt(y, 10);
    }

     return x + y; 
}
console.log(myAdd('4',4));






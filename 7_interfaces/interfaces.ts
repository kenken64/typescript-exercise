/*
function displayUser(user:{firstName:string, lastName: string}){
    console.log(user.firstName+' '+user.lastName);
}

let myUser = {firstName:'John', lastName:'Doe'};
displayUser(myUser);


interface User extends Membership{
    firstName:string;
    lastName: string;
    email?: string;
}

interface Membership {
    type?:string;
}

function displayUser(user:User){
    if(user.email){
        console.log(user.firstName+' '+user.lastName+' - '+user.email);
    } else {
        console.log(user.firstName+' '+user.lastName);
    }

    if(user.type){
        console.log(user.firstName+' has a '+user.type+' membership');
    }
}

let myUser = {
    firstName:'John', 
    lastName:'Doe', 
    email:'john@gmail.com',
    type: 'Gold'
};

displayUser(myUser);
*/

interface userFunc{
    (name: string, age: number): string;
}

let getUser: userFunc;
getUser = (myname, myage) => {
    return myname+ ' is '+myage+' years old';
}

console.log(getUser('John', 30));
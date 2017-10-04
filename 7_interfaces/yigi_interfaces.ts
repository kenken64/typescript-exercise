//define a function named displayUser1 consuming an object 
//  which has two string fields
function displayUser1(user:{firstName:string, lastName: string}){
    //print the full name of user
    console.log(user.firstName+' '+user.lastName);
}

//define an object named myUser1 which has two string fields
let myUser1 = {firstName:'John', lastName:'Doe'};
//pass myUser1 to function displayUser1
displayUser1(myUser1);


//define a User interface as subinterface of Membership
interface User extends Membership{
    //must contain firstName and lastName
    firstName:string;
    lastName: string;
    //may contian email
    email?: string;
}

//define a Membership interface
interface Membership {
    //may contain type
    type?:string;
}

//function displayUser2 consuming a object followed User interface
//  which insist user must contain fields named firstName and LastName,
//    may contain fields named email and type
function displayUser2(user:User){
    //if user has a field called email, then print it out
    if(user.email){
        console.log(user.firstName+' '+user.lastName+' - '+user.email);
    } else {
        console.log(user.firstName+' '+user.lastName);
    }
    
    //if user has a field called type, then print the description
    if(user.type){
        console.log(user.firstName+' has a '+user.type+' membership');
    }
}

//create a object named myUser2
let myUser2 = {
    firstName:'John', 
    lastName:'Doe', 
    email:'john@gmail.com',
    type: 'Gold'
};

//pass myUser2 to function displayUser2
displayUser2(myUser2);

//define a function interface which consumes two parameters(string, number)
//  and return a string
interface userFunc{
    (name: string, age: number): string;
}

//function getUser follow the interface userFunc
let getUser: userFunc;
//define function getUser
getUser = (myname, myage) => {
    return myname+ ' is '+myage+' years old';
}

//call the function getUser and print the result out
console.log(getUser('John', 30));


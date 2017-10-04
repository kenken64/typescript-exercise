
let a = 55;
let b = 45;

console.log(a);
console.log(b);


function showVar(){
    var a = 33;
    if(true){
        var a = 44;
        console.log(a);
        //the change of var a is also available outside if scope
    }
    console.log(a);
}

showVar();


function showLet(){
    let a = 33;
    if(true){ 
        let a = 44;
        console.log(a);
         //the change of let a is only available in if scope
    }
    console.log(a);
}

showLet();


for(let i = 0;i < 5;i++){
    console.log('Number '+i);
}

//Wrong:
//let i is not available outside for scope
//console.log(i);


//declare a const array
const colors = [];

//pust items into array
colors.push('red');
colors.push('blue');

console.log(colors);

//Wrong:
//colors is a const array, can't be redefined
//colors = [];

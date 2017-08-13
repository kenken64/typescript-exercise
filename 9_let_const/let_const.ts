/*
let a = 55;
let a = 45;

console.log(a);
*/

function showVar(){
    var a = 33;
    if(true){
        var a = 44;
        console.log(a);
    }
    console.log(a);
}

//showVar();

function showLet(){
    let a = 33;
    if(true){
        let a = 44;
        console.log(a);
    }
    console.log(a);
}

//showLet();

for(let i = 0;i < 5;i++){
    console.log('Number '+i);
}

//console.log(i);

const colors = [];

colors.push('red');
colors.push('blue');

const colors = [];

console.log(colors);
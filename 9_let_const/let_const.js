/*
let a = 55;
let a = 45;

console.log(a);
*/
function showVar() {
    var a = 33;
    if (true) {
        var a = 44;
        console.log(a);
    }
    console.log(a);
}
//showVar();
function showLet() {
    var a = 33;
    if (true) {
        var a_1 = 44;
        console.log(a_1);
    }
    console.log(a);
}
//showLet();
for (var i = 0; i < 5; i++) {
    console.log('Number ' + i);
}
//console.log(i);
var colors = [];
colors.push('red');
colors.push('blue');
var colors = [];
console.log(colors);

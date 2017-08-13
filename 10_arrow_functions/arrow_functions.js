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
var User = {
    name: 'John Doe',
    age: 25,
    startAging: function () {
        var _this = this;
        setInterval(function () {
            _this.age++;
            console.log(_this.age);
        }, 1000);
    }
};
var john = Object.create(User);
john.startAging();

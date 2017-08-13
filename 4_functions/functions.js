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
function getFullName(firstName: string, lastName?: string): string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName+' '+lastName;
}
*/
function getFullName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var name1 = getFullName('John', 'Doe', 'Williams', 'Johnson', 'Jackson');
console.log(name1);

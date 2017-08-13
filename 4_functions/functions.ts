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

function getFullName(firstName:string, ...restOfName: string[]){
    return firstName+ ' '+restOfName.join(' ');
}

let name1 = getFullName('John', 'Doe', 'Williams','Johnson', 'Jackson');

console.log(name1);
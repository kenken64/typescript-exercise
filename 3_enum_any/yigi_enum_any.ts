//Enums allow us to define a set of named numeric constants
//  creat a enum named Color which contain constant members Red, Blue and Green
//    initialize Red to 3, Blue to be Red * 2
enum Color {
    //constant members

    Red = 3,
    Blue = Red * 2,
    //Green does not have an initializer 
    //  and the preceding enum member was constant
    //    so the value of Green will be Blue plus one, which is 7. 
    Green
}

//Gr is defined to be a Color and has the value as Green in enum Color
let Gr: Color = Color.Green;
console.log(Gr);


//creat a enum named PayLog 
//  which contain constant members mon, tues, wed, thurs, fri
//    initialize mon to 125.50, tues to 95.66, wed to 0,
//      thurs to 110.33 and fri to 150.88
enum PayLog {
    //constant members

    mon = 125.50,
    tues = 95.66,
    wed = 0,
    thurs = 110.33,
    fri = 150.88
}

//paycheck is defined to be type number and be giving the result of 
//  the sum of mon, tues, wed, thurs and fri in enum PayLog
let paycheck: number = PayLog.mon + PayLog.tues + PayLog.wed + PayLog.thurs + PayLog.fri;
console.log(paycheck);


//declare an1 to be dynamic type
let an1: any;
//let an1 to be 'Hello'
an1 = 'Hello';
console.log(an1);

//declare an2 to be dynamic type
let an2: any;
//let an2 to be 12
an2 = 12;
console.log(an2);

//declare an3 to be dynamic type
let an3: any;
//let an3 to be true
an3 = true;
console.log(an3);

//declare x to be array contained any types
let x: any[];
//declare y to be array contained any types
let y:Array<any>;

//let x to be [1,2,3]
x = [1,2,3];
//let y to be ['Hello', 'World', 12]
y = ['Hello', 'World', 12];

console.log(x);
console.log(y);

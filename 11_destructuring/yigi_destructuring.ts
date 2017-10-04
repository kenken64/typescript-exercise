//define object user
const user = {
    first: 'John',
    last: 'Doe'
}

//let object {first, last} has same value as user
const {first, last} = user;
console.log(first+' '+last);

//define array users
const users = ['mark', 'jeff', 'carlos'];
//let array [user1, user2, user3] has same value as users
const [user1, user2, user3] = users;
console.log(user2);

//define array [a, b]
const [one, two] = ['x', 'y'];
console.log(one);


//define an object named obj
//  the first field a is an array contained two objects, {foo: 123, bar: 'abc'} and {}
//    the second field b has the value true
//const obj = {a: [{foo: 123, bar: 'abc'}, {}], b: true}
//Wrong:
//a has no property 'bar' and no string index signature.
//console.log(obj);
//const {a: [{foo: f}]} = obj;

//const {x: x} = {x: 12, y: 22};
//console.log(x);


//the element at index 0 has no match on the right-hand side.
//so a is set to 3
const [a = 5] = [];

//the element at index 0 has no match on the right-hand side.
//so b is set to 6
const {prop:b = 6} = {};
console.log(a);
console.log(b);

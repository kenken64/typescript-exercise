/*
const user = {
    first: 'John',
    last: 'Doe'
}

const {first, last} = user;

console.log(first+' '+last);

const users = ['mark', 'jeff', 'carlos'];

const [user1, user2, user3] = users;

console.log(user2);

const [a, b] = ['x', 'y'];

console.log(a);


const obj = {a: [{foo: 123, bar: 'abc'}, {}], b: true}
const {a: [{bar: b}]} = obj;

//console.log(b);

const {x: x} = {x: 12, y: 22};
console.log(x);
*/

const [x = 5] = [];
const {prop:y = 6} = {};
console.log(y);
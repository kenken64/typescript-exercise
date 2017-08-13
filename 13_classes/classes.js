var Person = (function () {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log(this.firstName + ' says hello...');
        return this.firstName + ' says hello...';
    };
    return Person;
}());
var john = new Person('John', 'Doe', 30);
//john.age = 31;
//console.log(john.age);
var kevin = new Person('Kevin', 'Williams', 40);
kevin.sayHello();

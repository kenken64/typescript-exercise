var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        _super.call(this, name);
        console.log(this.name);
    }
    return Dog;
}(Animal));
//let dog = new Animal('Spot');
//console.log(dog.name);
//dog.setName('Fred');
//console.log(dog.getName());
var dog = new Dog('Ralph');

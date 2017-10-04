//declare a class
class Animal{
    //field name can be accessed by subclass since it's protected
    protected name: string;

    //constructor
    constructor(name: string){
        this.name = name;
    }
    //method
    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }
}

//Dog is a subclass of Animal
class Dog extends Animal{
    //Dog's constructor
    constructor(name: string){
        //call the constructor for parent class
        super(name);
        console.log(this.name);
    }
}

let dog1 = new Animal('Spot');

//Wrong:
//field name is protected and only accessible inside subclasses or itself.
//console.log(dog1.name);

//call the function setName
dog1.setName('Fred');
console.log(dog1.getName());

//define a new dog
let dog: Animal = new Dog('Ralph');

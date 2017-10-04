//declare a new parent class Person, which has name and id
class Person{
    name: string;
    id:number;
//member initialization
    constructor(name: string){
        this.name = name;
        console.log(`Person Created: ${this.name}`);
    }

//A new method in the parent class
    sayHello(){
        console.log(`${this.name} says hello`);
    }
//Another new method in the parent class
    payBalance(){
        console.log(`Customer ${this.id} has paid their balance`);
    }
}



//The child object class inherits features from its parent class
class Customer extends Person{
    id: number;
    constructor(id: number, name: string){
        //Use super to call name
        super(name);
        this.id = id;
        console.log(`Customer Created: ${this.name}`);
    }
    //Use super to call fmethod on an objects's parent 
    payBalance(){
        super.payBalance();
    }
}

//assign
let jose = new Person('Jose');
//assign
let mary: Person = new Customer(1, 'Mary');
//call the member function
mary.sayHello();
mary.payBalance();
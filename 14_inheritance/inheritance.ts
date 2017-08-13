class Person{
    name: string;
    id:number;

    constructor(name: string){
        this.name = name;
        //console.log(`Person Created: ${this.name}`);
    }

    sayHello(){
        console.log(`${this.name} says hello`);
    }

    payBalance(){
        console.log(`Customer ${this.id} has paid their balance`);
    }
}

class Customer extends Person{
    id: number;

    constructor(id: number, name: string){
        super(name);
        this.id = id;
        //console.log(`Customer Created: ${this.name}`);
    }

    payBalance(){
        super.payBalance();
    }
}

//let jose = new Person('Jose');
let mary: Person = new Customer(1, 'Mary');
//mary.sayHello();
mary.payBalance();
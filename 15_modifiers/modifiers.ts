class Animal{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
        console.log(this.name);
    }
}

//let dog = new Animal('Spot');
//console.log(dog.name);
//dog.setName('Fred');
//console.log(dog.getName());

let dog: Animal = new Dog('Ralph');
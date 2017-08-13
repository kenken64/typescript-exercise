class Person{
    firstName: string;
    lastName: string;
    age: number;

    constructor(first:string, last:string, age:number){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    sayHello(){
        console.log(this.firstName+ ' says hello...');
        return this.firstName+ ' says hello...';
    }
}

let john = new Person('John', 'Doe', 30);
//john.age = 31;
//console.log(john.age);

let kevin = new Person('Kevin', 'Williams', 40);
kevin.sayHello();
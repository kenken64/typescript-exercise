//define the interface TimeInterface
//  the class implements this interface must contain a data type field named current
//    and functions, setTime(d: Date) and getTime()
interface TimeInterface{
    current: Date;
    setTime(d: Date);
    getTime();
}

//the class Time must follow the rules of TimeInterface
class Time implements TimeInterface{
    current: Date;

    setTime(d: Date){
        this.current = d;
    }

    getTime(){
        console.log(this.current);
        return this.current;
    }

    constructor(){}
}

let clock = new Time();
//set the clock time to current time
clock.setTime(new Date());
clock.getTime();
import {ShapesInterface} from './ShapesInterface';

export class Triangle implements ShapesInterface{
    points: number;

    getPoints(){
        console.log(`A triangle has ${this.points} points`);
    }

    setPoints(points:number){
        this.points = points;
    }
}

export class Square implements ShapesInterface{
    points: number;

    getPoints(){
        console.log(`A triangle has ${this.points} points`);
    }

    setPoints(points:number){
        this.points = points;
    }
}
//Importing's keyword is import
import {ShapesInterface} from './ShapesInterface';
//Import a single export from a module
export class Triangle implements ShapesInterface{
    points: number;
    getPoints(){
        //this.points means getting the points from the claas itself
        console.log(`A triangle has ${this.points} points`);
    }
    
    setPoints(points:number){
        //change the object's points value
        this.points = points;
    }
}
//class Square implements ShapeInterface
//class Square is exported
export class Square implements ShapesInterface{
    points: number;

    getPoints(){
        console.log(`A triangle has ${this.points} points`);
    }

    setPoints(points:number){
        this.points = points;
    }
}
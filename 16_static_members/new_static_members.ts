/*Define a new class Grid which has a static origin,
a method to calculate the square of the distance x and y*/
class Grid{
    static origin = {x:0, y:0};
    calcDist(point: {x:number; y:number}){
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    //scale is public 
    constructor(public scale: number){}
}



let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calcDist({x: 10, y:10}));
console.log(grid2.calcDist({x: 10, y:10}));
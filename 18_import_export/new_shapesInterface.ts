//Modules are executed within their own scope, not in the global scope
/*Which means that variables, functions, classes, etc. declared in a module are 
not visible outside the module unless they are explicitly exported using one of 
the export froms */
//Any file containing a top-level import or export is considered a module.
//Any declaration can be exported by adding the export key word export 
//The interface contains field points, method setPoints and method getPoints
export interface ShapesInterface{
    points: number;
    setPoints(p:number);
    getPoints();
}
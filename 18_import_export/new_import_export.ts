//Import the entire module into a single variable, and use it to access the module exports
import * as shapes from './shapes';

let t = new shapes.Triangle();

t.setPoints(3);
t.getPoints();

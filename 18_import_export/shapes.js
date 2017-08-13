"use strict";
var Triangle = (function () {
    function Triangle() {
    }
    Triangle.prototype.getPoints = function () {
        console.log("A triangle has " + this.points + " points");
    };
    Triangle.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Square = (function () {
    function Square() {
    }
    Square.prototype.getPoints = function () {
        console.log("A triangle has " + this.points + " points");
    };
    Square.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Square;
}());
exports.Square = Square;

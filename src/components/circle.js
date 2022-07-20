// import using require

// declare class


// export class using module.exports
import {Shape} from "./Amazon"

class Circle extends Shape{
    calculateArea(){

    };
}

const circle1 = new Circle;
console.log(Circle.color)

module.exports.Circle = Circle;

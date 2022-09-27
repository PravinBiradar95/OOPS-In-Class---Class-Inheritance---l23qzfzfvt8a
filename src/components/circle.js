// import using require

// declare class


// export class using module.exports
//import {Shape} from "./Amazon";
import {Shape} from "./shape";

class Circle extends Shape{
    constructor(){
        super();
    };


    calculateArea(){

    };
}

//const circle1 = new Circle;
console.log(Circle.color)

module.exports = Circle;

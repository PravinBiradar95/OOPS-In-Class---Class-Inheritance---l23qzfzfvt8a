// declare class

// export class using module.exports
class  Shape{
    constructor() {
        this.color = "blue";
    }

    drawShape(){
        console.log(this.color);
    }
    calculateArea(){

    };
}

module.exports = Shape;

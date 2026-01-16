//class:blueprint
//object:instance
//class:exmaple
class car{
    constructor(color, wheel,brand,model){
            //initail setup for the class
            this.color = color
            this.wheel = wheel
            this.brand = brand
            this.model = model
    }

    //methods of the class
    start(){
        console.log(`${this.brand} ${this.model} started`)
    }
    break(){
        console.log(`${this.brand} ${this.model} stopped`)
    }
}
//creating object or instance of the car class
let mercedes = new car ("red",4,"mercedes","amg gt63 se")
let bmw = new car ("black",4,"bmw","e39 m5")
console.log(mercedes.model)
console.log(bmw.wheel)
bmw.start()
bmw.break()
mercedes.start()

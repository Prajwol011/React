//this keyword in key:value pair @object
let laptop = {
    laptopName : "Acer Alite 4.0",
    price : 52000,
    specification: "8 core i3, 8GB RAM, 128GB SSD",
    color : "Navy Blue, Black",
    // Note: "this" wont work in arrow fn cuz arrow fn doesnt reserve "this" operator 
    // displayPrice: ()=>{
    //     console.log("Display Price called")
    //     console.log("Price of laptop:",this.price)

    // }
    displayPrice: function(){
        console.log("Display Price called")
        console.log("Price of laptop:",this.price)

    },
    displaySpecification: function(){
        console.log("Specification: ",this.specification)
    }
}
console.log(laptop)
//calling display price fn
laptop.displayPrice()
// laptop.displaySpecification()
//solution to re-preserve this keyword
let tempFunc1 = laptop.displaySpecification // here we assign the fn to the temfn1 variable , so the this pointer of tempfn1 and this pointer of the laptop.dis... are not same , so we tryna call the fn through the this pointer to tempfn1 so the oputput will be undefined
let tempFunc2 = laptop.displaySpecification.bind(laptop)// here we bind the this pointer of tempfn2 and laptop.disp... , causing the display fn to be called through tempfn2 this pointer, so output is the fn called 
tempFunc1()// undefined output
tempFunc2()//output comes



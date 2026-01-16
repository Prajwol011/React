let numbers = [10,12,14,16] 
// destructuring array 
let [a,b,c] = numbers
console.log(a,b,c)
//destructuring key:value pairs object
let myObj = {
    fullName: "Ram Karki",
    age: 23,
    address: "kathmandu",
    "gender" : "Male"
}
let {gender, age, fullName} = myObj
console.log("gender:",gender)
console.log(`age: ${age}`)
console.log("full name:",fullName)

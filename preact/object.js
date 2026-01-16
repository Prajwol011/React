//object(key:value pair), json data
///notation: {}
//creating object:

let myObj = {
    marks: 56,
    "fullName": "Hari Singh",
    age: 34,
    address: "Kathmandu",
    isMarrid: false,
}

//accessing value with key
//1. using bracket notation

let fullname = myObj["fullName"] // yo wala bracket notation praya follow garidaina
console.log(fullname)

//2. using sot notation (recommended)
let age = myObj.age
console.log(age)

// let address = myObj.address
// console.log(address)

//adding new key:value pair

myObj.gender = "Male"
console.log("updated object: ", myObj)

//updating existinf key:value pair
myObj.marks = 99
console.log("Updated object: ", myObj)

myObj.fullName = "Syam Bahadur"
console.log("Updates object: ", myObj)

//deleting key:value pair
delete myObj.isMarrid
console.log("After deletion: ", myObj)

//there is no such extensions method for object (key:value pair)
//converting object (key:value pair) to object (array)
//converting keys to array

let keys = Object.keys(myObj)
console.log("keys: ", keys)

//converting to values array
let values = Object.values(myObj)
console.log("values: ", values)

//converting to entries [key,value] array
//[[k1,v1],[k2,v2],[k3,v3]]

let entries = Object.entries(myObj)
console.log("entries: ", entries)

//foreach loop
keys.forEach(
    (element, index)=>{
        console.log(`Element in index: ${index}
        is: ${element}`)
    }
)
values.forEach(
    (element, index)=>{
        console.log(`Element in index: ${index}
        is: ${element}`)
    }
)
//let [a,b] = [23,45]
entries.forEach(
   ([key, value], index)=>{
        console.log(`Element in index: ${index}
        is: ${key}:${value}`)
   }
)
//todo:
// 1. demonstrate array extension method: reverse, slice, sort, concat, shift
// let arrOfObj = [
//     {name: "hari", age: 23},
//     {name: "ram", age: 34},
//     {name: "shyam", age: 45},
// ]
// #use for each loop to print name and age with destructuring

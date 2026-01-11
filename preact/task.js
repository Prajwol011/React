let arrOfObj = [
    {name: "hari", age: 23},
    {name: "ram", age: 34},
    {name: "shyam", age: 45},
]
console.log("Original Array: ", arrOfObj)

//for reverse
let reversedArr = [...arrOfObj].reverse()
console.log("Reversed Array: ", reversedArr)

//for slice
let sliced = arrOfObj.slice(0, 2)
console.log("Sliced Array: ", sliced)

let sliced2 = arrOfObj.slice(1)
console.log("Sliced Array 2: ", sliced2)

//sort by age
let sortedArr = [...arrOfObj].sort((c, d) => c.age - d.age)
console.log("Sorted Array by age: ", sortedArr)

//for concat
let newArr = arrOfObj.concat([
    {name: "gita", age: 19},
    {name: "sita", age: 19},
])
console.log("Concatenated Array: ", newArr)

//for shift
let shiftArr = [...arrOfObj]
let shiftedElement = shiftArr.shift()
console.log("Array after shift: ", shiftArr)
console.log("Shifted Element: ", shiftedElement)

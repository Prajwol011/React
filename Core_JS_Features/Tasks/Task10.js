// Task 10 – Merge and Destructure Objects
// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const merged = {...obj1,...obj2}
console.log("merged = ", merged);
const{a,d}=merged;
console.log(a);
console.log(d);



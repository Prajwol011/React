// Task 2 – let and const Scope
// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors. 

{
    let name = "Prajwol";
}
console.log(name);

{
    const age = 19;
}
console.log(age);

//In JavaScript, let and const are Block Scoped. This means they only exist "inside" the specific set of curly braces where they were born. As soon as the computer hits the closing brace }, those variables are wiped from memory. So, when we try to access them outside their block, we get a ReferenceError saying that the variable is not defined.
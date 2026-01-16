// promises: used to handel asynchronous operations
// syntax: new promise((resolve, reject) => {})
// resolve: when the operation is successful
// reject: when the operaton is failed
// resolve and reject are the functions

// creating promises
let myPromise = new Promise(
    (resolve, reject) => {
        let iHaveDoneMyWork = false;
        if (iHaveDoneMyWork) {
            resolve("I have done my work")
        } else {
            reject("I havent done my work")
        }

    }

)

// consuming promise
myPromise.then((result) => {
    console.log("inside then")
    console.log(result)
}).catch((error) => {
    console.log("inside catch")
    console.log(error)
}).finally(() => {
    console.log("inside finally")
})


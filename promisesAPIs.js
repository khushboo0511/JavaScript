
// 1. Promise can be created using a new Promise() constructor function.
// 2. This constructor function takes a callback function as argument. 
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// 4. We can only resolve or reject a promise. Nothing else can be done.
// 5. An error can also be created using new Error('error message').
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// 9. We can have multiple catch based on requirement and then a general catch at the end.
// 10. Always remember to return a value in the promise chain for the next .then to use .
// 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.


//Promise.all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 fail"), 3000);
}).catch((err) => {console.error(err)})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 success"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
})

Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
})


//Promise.allSettled

const q1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Q1 fail"), 3000);
}).catch((err) => {console.error(err)})

const q2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Q2 success"), 1000);
})

const q3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Q3 success"), 2000);
})

Promise.allSettled([q1, q2, q3]).then(res => {
    console.log(res);
})


const r1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("R1 fail"), 3000);
}).catch((err) => {console.error(err)})

const r2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("R2 success"), 1000);
})

const r3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("R3 success"), 2000);
})

Promise.any([r1, r2, r3]).then(res => {
    console.log(res);
}).catch((err) => {
    console.error(err);
    console.log(err.errors);
})

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!!")
    }, 5000)
})

// async function getData() {
//     return p
// }

// const dataPromise = getData()

// dataPromise.then((res) => console.log(res))


function getDatawA() {
    // JS engine will not wait for promise to be resolved
    p.then((res) => console.log(res))
    console.log("Namaste India")
} 
getDatawA()

// async function handlePromise() {
//     const val = await p;
//     console.log(val);
// }
// handlePromise()
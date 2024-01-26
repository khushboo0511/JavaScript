const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value")
    }, 10000)
})

async function handlePromise() {
    const val = await p1
    console.log("Namaste India")
    console.log(val)

    const val2 = await p2
    console.log("Namaste India")
    console.log(val2)
}
handlePromise()
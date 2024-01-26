// const GITHUB_API = "https://api.github.com/users/khushboo0511";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//     console.log(data);
// })

// //states of promises
// //unfulfilled, fulfilled, rejected
// //promises are immutable

const cart = ["shoes", "pants", "kurtas"]

//Promise hell is designed in such a way that we don't fall in promise hell

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    proceedToPayment(orderId);
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    console.log(paymentInfo)
})
.catch(function (err) {
    console.log(err.message)
})
.then(function (orderId) {
    console.log("No matter what happens, I will definitely be called.")
})


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        } 
        const orderId = "46546";
        if (orderId) {
            resolve(orderId)
        }
    })
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCart (cart) {
    return false;
}

// Only once

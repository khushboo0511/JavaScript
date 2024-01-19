// // What is a Callback Function in JavaScript

// setTimeout(function() {
//     console.log("timer")
// }, 5000);

// function x(y) {
//     console.log("x")
//     y();
// }
// x(function y() {
//     console.log("y")
// });

// // JavaScript is a synchronous and single-threaded language
// // Everything will be executed through call stack
// // We should never block main thread
// // Asynchronous functions

// Function that is passed on as argument to another function is called callback function.
// setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.

//Event listeners can also invoke closures with scope.
//Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

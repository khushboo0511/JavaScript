a();

// Function Statement aka Function declaration

function a() {
    console.log("Funtion a is called");
}

// Function Expression

var b = function() {
    console.log("b is called");
}
b();
// b cannot be called before the function (undefined), because it is treated like any other variable

// Anonymous Functions - functions without name, doesnt have it's own identity
// Used as values

// function () {

// }

// Named Function Expression

var c = function abc() {
    console.log("Function abc is called");
    //console.log(abc);
}
c();
// abc() will give error, abc is not defined
// it's a local variable, not accesssible outside the scope

// Difference between paramenters and arguments

var d = function (param1, param2) {
    console.log("d called");
}
d(5, 10);

//identifier, local variable, label (params) are parameters of the function
//cannot be used outside function

// First Class Functions

var e = function (param1) {
    console.log(param1)
}
 e (function() {

 });
 // can pass named functions too

 var f = function (param2) {
    return function () {

    }
 }
 console.log(f());

 //first class variables
 // the ability of functions to be used as values and ca be passed as argument to another function and can be returned from the functions
 // functions are first class citizens
// same for let and const variables

// Arrow Functions


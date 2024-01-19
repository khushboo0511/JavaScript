// var counter = 0;
// function incrementCounter() {
//     counter++;
// }

// function counters() {
//     var count = 0;
//     return function incrementCounters(){
//         count++;
//         console.log(count);
//     }
// }
// console.log(counter);
// var counter1 = counters();
// var counter2 = counters();
// counter1();
// counter1();
// counter2();

// anybody can access counter and can modify it
// So we need to ensure that no one else can modify it, so we will use closure
// Wrap it inside a function

// Not a good way, so we will create constructor functions

// function counter() {
//     var count = 0;

//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// DISADVANTAGES

//Over consumption of memory
//Not garbage collected till the program expires
// Can lead to memory leaks


//Garbage collector
// A program in JS engine that freeze up the unutilized memory


// Relation between garbage collector and closures

function a () {
    var x = 0;
    function b() {
        console.log(x);
    }
    b();
}
a();
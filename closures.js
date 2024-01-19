function next_outer(){
    var c = 20;
    function outer(b) {
        let a = 10;
        function inner() {
            console.log(a, b, c);
        }
        // var a = 10;
        return inner;
    }
    return outer;
}
let a = 15;

next_outer()("Hello")();

// if it doesn't find a in block scope, then it will come here to find a (global scope)

// var close = (next_outer())("Learning JavaScript");
// close();


// Closures is used in module pattern
// Used in function curry
// In higher order functions like memoize, etc
// Helps in data hiding and encapsulation

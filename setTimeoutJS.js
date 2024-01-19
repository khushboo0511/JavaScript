// function x() {
//     for (let i=1; i<=5; i++) {
//         function close(x) {
//             setTimeout(function (){
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }
//     console.log("Namaste JavaScript")
// }
// x();

//doesn't work for var, because i is assigned same memory location

// function x() {
//     for (let i=1; i<=5; i++) {
//         setTimeout(function (){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste JavaScript")
// }
// x();

function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 1000);
    console.log("Hii there! I am Khushuu");
}
x();
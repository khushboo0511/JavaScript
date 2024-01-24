console.log("Start");

setTimeout(function cb () {
    console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While expires");

//Even if the timer is 0, the function still goes through Callback Queue, and gets executed after the rest of the program which are in the Global Execution context


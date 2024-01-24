
const arr = [5, 7, 4, 9, 12];

//filter all the odd values

function isOdd(x) {
    return x%2;
}

function isEven(x) {
    return x%2 === 0;
} 

const output3 = arr.filter((x) => x < 10);

const output = arr.filter(isOdd)
const output2 = arr.filter(isEven);

console.log(output)
console.log(output2);
console.log(output3);
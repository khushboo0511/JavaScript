
const arr = [5, 3, 12, 7, 9, 14];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function toBinary(x) {
    return x.toString(2);
}

const output2 = arr.map((x) => x.toString(2));


const output = arr.map(double);
const newOutput = arr.map(triple);
const binary = arr.map(toBinary);

console.log(output);
console.log(newOutput);
console.log(binary);
console.log(output2);
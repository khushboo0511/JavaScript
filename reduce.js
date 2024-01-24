
const arr = [5, 9, 12, 6, 11, 14];

// sum or max

function findSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const output5 = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output5);


function findMax(arr) {
    let max = 0;
    for (let  i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));


const outputNew = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)

console.log(outputNew)
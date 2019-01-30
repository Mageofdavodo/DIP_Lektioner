// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}
console.log(list); // => 0,1,2,4,7,8,9,13,16
let current = 0;
let left = 0;
let right = list.length - 1;
let middle = -1;
let found = false;


function binarySearch(list, value) {
    while (!found && left <= right) {
        middle = (left + right) / 2;
        middle = Math.trunc(middle);
        current = list[middle];
        if (current === value) {
            found = true;
        } else if (current > value) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    if (found) {
        return middle;
    } else {
        return -1;
    }
}
console.log(binarySearch(list, 8))




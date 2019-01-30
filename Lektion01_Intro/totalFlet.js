// bubbleSort.js
let list = [0, 1, 2, 4, 7, 8, 9];
let list2 = [3, 5, 6, 10];


console.log(list);
console.log(list2);
let i1 = 0;
let i2 = 0;
let fletList = [];


function totalFlet(list, list2) {
    while (i1 < list.length && i2 < list2.length) {
        if (list[i1] < list2[i2]) {
            fletList.push(list[i1]);
            i1++;
        } else if (list[i1] > list2[i2]) {
            fletList.push(list2[i2]);
            i2++;
        } else {
            fletList.push(list[i1]);
            i1++;
            i2++;
        }
    }
    while (i1 < list.length) {
        fletList.push(list[i1]);
        i1++;
    }
    while (i2 < list2.length) {
        fletList.push(list2[i2]);
        i2++;
    }

    return fletList;
}

console.log(totalFlet(list, list2));



// Q Find the second largest number
function secondLargest(arr) {
    let largest = -1;
    let secondlargnum = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargnum = largest;
            largest = arr[i];

        } else if (arr[i] != largest && arr[i] > secondlargnum) {
            secondlargnum = arr[i];
        }
    }
    return secondlargnum;
}

console.log(secondLargest([12, 35, 1, 10, 34]));
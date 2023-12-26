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

// console.log(secondLargest([12, 35, 1, 10, 34]));

// ques 2- Rotate array by K
// Give an integer array nums, rotate the array to the right by k steps,
// where K is non-negative.

function rotateArray(nums, k) {
    let size = nums.length;
    if (size > k) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, size);
    console.log(rotated);
    nums.unshift(...rotated);

    return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
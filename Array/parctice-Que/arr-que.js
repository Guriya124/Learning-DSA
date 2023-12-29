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

// const rotateArray1 = function (nums, k) {

//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }

//     return nums;
// }


// console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 16));

function rotatedArray2(nums, k) {
    let size = nums.length;
    if (size > k) {
        k = k % size;
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    return nums;
}

function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

// console.log(rotatedArray2([-1, -100, 3, 99], 2));

// Ques-3 Remove Duplicates from sroted Array
// Given an integer array nums sorted in non-decreasing order,remove
// theduplicates in-place such that each unique element appears
// only onces.The relative order of the element should be kept
// the same. The return the number of unique element in nums.

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }

    }
    // console.log(nums);
    return nums.length;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5]));

// without js method

function removeDuplicate(nums) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }

    }

    return i + 1;
}

// console.log(removeDuplicate([0, 1, 2, 2, 3, 3, 5, 5, 6, 6]));

// Ques-4 Move  all zero in an Array to End of the Array

function moveZero(nums) {
    let len = nums.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i];
        }
    }

    while (count < len) {
        nums[count++] = 0;
    }
    return nums;
}
// console.log(moveZero([0, 1, 2, 0, 0, 3, 4, 5, 0, 6]));

// Que-5 Maxmum difference between increasing Element
function maxmumDifference(nums) {
    let maxDiff = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                let diff = nums[j] - nums[i];
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
    }
    return maxDiff;
}

// console.log(maxmumDifference([50, 40, 4, 10, 45, 15]));

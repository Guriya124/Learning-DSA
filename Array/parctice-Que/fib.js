// Question 2 - Fibonacci Number
// Fibonacci series -> 0,1,1,2,3,5,8,,13,21, 34, 55, 89, 144, 233......so on
//  f(0) = 0, f(1) =1
// f(n) = f(n-1) +f(n-2), for n>1

// const fib = function (n) {
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr[n];
// };

// const res = fib(5);

// using recursion

// const fib = function (n) {
//     if (n <= 1) return n;

//     return fib(n - 1) + fib(n - 2);

// };
// console.log(fib(7));

// Inbuilt loop Mrthod

const numbers = [1, 2, 3, 4, 5, 6];

// Map in javascript

numbers.map((item, index, array) => {
    return item + 3;
});
// filter in javascript
const newNums = numbers.filter((item, index, array) => {
    return item > 3;
});

// reduce in javascript

const sum = numbers.reduce((prev, item,) => {
    return prev + item;
}, 3);

// some in javascript. It return Ture & False

numbers.some((item, index, array) => {
    return item > 3;
});

// every in javascript. It check all the element and then return true & false.
numbers.every((item, index, array) => {
    // return item > 3; // it return false
    return item < 10; // it return true

});

// FIND in javascript. Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const res = numbers.find((item, index, array) => {
    // return item > 3; // return 4
    return item > 6; //return undefine
});

console.log(res);
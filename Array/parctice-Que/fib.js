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

const fib = function (n) {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);

};
console.log(fib(7));
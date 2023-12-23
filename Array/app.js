// Declare an Array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeroes = ["spiderman", "antman", "Thor", "Ironman"];
// const myArray = new Array(1, 2, 3, 4);
// console.log(myArr);

// Array methods

// push method
// myArr.push(6);
// myArr.pop();
// console.log(myArr);

// unshift method
// myArr.unshift(9);
// myArr.shift();

// const newArr = myArr.join();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// console.log(myArr);
// console.log(newArr);

// Slice, Splice
// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B", myArr);


// const myn2 = myArr.splice(1, 3);
// console.log("c", myArr);
// console.log(myn2);

// const marvel_Heros = ["spiderman", "thor", "ironman"];
// const dc_Heros = ["batman", "flash", "superman"];

// // concat() method is used to merge two or more arrays.
// // This method does not change the existing arrays, but instead returns a new array.

// // const allheros = marvel_Heros.concat(dc_Heros);
// // console.log(allheros);

// // spread(...)

// const allHeros = [...marvel_Heros, ...dc_Heros];
// // console.log(allHeros);

// // flat method Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 12]]]

// const another_array = arr.flat(Infinity);
// console.log(another_array);

// console.log(Array.isArray("Guriya"));

// console.log(Array.from("Guriya"));
// console.log(Array.from({ name: "Guriya" }));  // interesting

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// // Array.of() method is returns a new array from a set of elements.
// console.log(Array.of(score1, score2, score3));


// ----------------------------------------------------------------------------------------------------
// ------------------------------------QUESTIONS ------------------------------------------------------
// push Method :- he .push() method adds one or more elements to the end of an array and returns the new length.
// for Examples are

// que 1 -palindrome Number
// An integer is a palindrone when it reads the same forward and backward.

// const isPalidrome = function (x) {
//     if (x < 0) return false;

//     return x === +x.toString().split("").reverse().join("");
// };
// const res = isPalidrome(433);
// console.log(res);







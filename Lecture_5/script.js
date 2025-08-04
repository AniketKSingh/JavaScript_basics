// function sayMyName(){
//     console.log("Rahul");
// }

// sayMyName();

// Arrow Functions
// const sayMyName = () =>{
//     console.log("Rahul!");
// };

// sayMyName();

// function sum(a , b){
//     return a + b;
// }

// let res = sum(10, 20);
// console.log(res);

// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(10,20));

// const functionName = (Param1, param2) {
//     // Work
// };

// const multiply = (a ,b) =>{
//     return a * b;
// };

// console.log(multiply(10, 2));

// const printHello = () => {
//     console.log("Hello!");

// }

// printHello();

// function countVowels(s){
//     let count = 0;

//     for(let val of s){
//         if(val === 'a' || val === 'e' || val === 'i' | val ==='o' || val ==='u'){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("apnacollege"));
// console.log(countVowels("aeiou"));

// const countVowels = (s) =>{
//     let count = 0;

//     for(let val of s){
//         if(val === 'a' || val === 'e' || val === 'i' | val ==='o' || val ==='u'){
//             count++;
//         }
//     }

//     return count;

// }

// console.log(countVowels("apnacollege"));
// console.log(countVowels("aeiou"));

// forEach Loop in Arrays
// Array.forEach((val, index, array) =>{
//     console.log(val);
// });

// let arr = [10, 20, 30, 40, 50];

// arr.forEach((val, idx, array)=>{
//     console.log(val, idx, array);
// });

// let array = [1,2,3,4,5];

// array.forEach((val)=> {
//     console.log(val*val);
// });

// let calcSquare = (val) => {
//    console.log(val*val);
// }

// array.forEach(calcSquare);

// let arr = [1,2,3,4,5];

// let newArr = arr.map((val)=>{
//     return val*val;
// });

// console.log(arr);
// console.log(newArr);

// let arr = [1,2,3,4,5];

// let newArr = arr.map((val) =>{
//     return val - 1;
// });

// console.log(newArr);

// craeting a copy
// let arr = [1,2,3,4,5];

// let newArr = arr.map((val) =>{
//     return val;
// });

// console.log(newArr);

// Filter - creates a new array based on some conditions

// let arr = [1,2,3,4,5,6,7,8];

// let newArr = arr.filter((val)=>{
//     return val % 2 === 0;
// });

// console.log(newArr);

// let newArr = arr.filter((val) =>{
//     return val > 3;
// });

// console.log(newArr);

// let op = arr.reduce((res, curr)=> {
//    return res + curr;
// });

// console.log("Sum of values: ", op);

// let mult = arr.reduce((res, curr)=> {
//     return res * curr;
// });

// console.log(mult);

// let largest = arr.reduce((max, curr)=> {
//     return max > curr ? max : curr;
// });

// console.log(largest);

// let marks = [34, 92, 88, 91, 73, 99];

// let toppers = marks.filter((val) =>{
//     return val > 90;
// });

// console.log(toppers);

// calculate avg 

// let sum = marks.reduce( (s, curr) =>{
//     return s + curr;
// });

// let avg = sum / marks.length;

// console.log(avg);

let n = prompt("Enter a number n: ");

console.log(n);

let arr = [];

for(let i = 1; i <= n; i++){
    arr.push(i);
}

console.log(arr);

// calculating Sum
let sum = arr.reduce((res, curr)=> {
    return res + curr;
});

console.log("Sum of all numbers upto n :", sum);


let fact = arr.reduce((fac, curr)=>{
    return fac*curr;
});

console.log(`factorial of n ${fact}`);













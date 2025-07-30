//strings and loops
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     console.log("i = ",i);
//     sum += i;

// }

// console.log("sum = ", sum);

// let str = "ApnaCollege";  strings or array

// for(let i of str){
//     console.log("i = ", i);
// }

// let lengthOfString = str.length ;
// console.log(lengthOfString);

// let student = {
//     fullName : "Rahul Kumar",
//     age : 20,
//     cgpa : 7.5,
//     isPass : true
// };

// console.log(student);

// for(let i in student){
//     console.log(i);
//     console.log(student[i]);
// }

// for(let i = 0; i <= 100; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let gameNum = 25;
// let userNum = prompt("Guess the game number");

// while(gameNum != userNum){
//     userNum = prompt("You have entered wrong number, Guess again");
// }

// console.log("Congratulations, you have entered the right number");

// alert("Congratulations, You have entered the right number");

// let str = "ApnaCollege";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str2 = "   Aman   Dhatarwal   ";
// console.log(str2.trim());

// console.log(str.slice(2,4));  // (start, end ) -> the end is non-inclusive and optional 
// console.log(str + str2);

// let val = str.replace("A","S");
// console.log(val);

// console.log(str.charAt(1));

// console.log(str[2]);

// let fullName = prompt("Enter your full name withot spaces");
// console.log(fullName);

// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// alert(`SThis is your User Name : ${userName}`);

// template literals
let sentence = `This is a template literal`;
console.log(sentence);

let temp = 500;

let val = `This is a template ${temp}`;  // `${}` -> this is placeholder, first substitution then addition
console.log(val);

console.log(`${1+2+3}`);







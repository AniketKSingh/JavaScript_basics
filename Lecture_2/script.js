// let a = 5;
// console.log(a);
// a++;
// a++;
// console.log(a);

// let b = 10;
// console.log("a + b", a+b);
// let color;

// if(mode === "dark-mode"){
//     color = "black";
// }
// else if(mode === "light"){
//     color = "white";
// }

// ternary operators 
// a ? b : c ;

// let d = (b > a) ? b : a;
// console.log(d);

// let fullName = prompt("Hello! : Enter you name");

// console.log("Name", fullName);

/*let num = prompt("Enter a number");

if(num % 5 === 0){
    console.log(num,"is a multiple of 5");
}
else{
    console.log(num,"not a multiple of 5");
}*/

let score = prompt("Enter you score");
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 70 && score <= 89){
    grade = "B";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 50 && score <= 59){
    grade = "D";
}
else{
    grade = "F";
}

console.log("Your grade according to your marks is ", grade);

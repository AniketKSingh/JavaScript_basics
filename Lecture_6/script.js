// selecting element by ID
// let elm = document.getElementById("secondPara");
// console.log(elm);
// console.dir(elm);

// // selcting element by class 
// let classElm = document.getElementsByClassName("divClass");
// console.log(classElm);
// console.dir(classElm);

// Selecting element by Tag Name
// let para = document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);

// Query Selector
// let elements = document.querySelector("#secondPara");
// console.log(elements);
// console.dir(elements);

// let allElements = document.querySelectorAll("p");
// console.log(allElements);
// console.dir(allElements);

// console.log(elements.tagName);

// let elm = document.querySelector(".divClass");
// // console.log(elm.innerText);
// // // elm.innerText = 'A\nD';
// // console.log(elm.innerText);

// // console.log(10);

// console.log(elm.innerHTML);
// // elm.innerHTML = "max";
// console.log(elm.textContent);
// console.log(elm.innerText);

// let h2 = document.querySelector('h2');
// console.log(h2);

// h2.innerText = h2.innerText + " From Apna College";

let div = document.querySelectorAll(".box");

console.log(div);
console.log(div[0]);
div[0].innerText = "Changed the text";

let idx = 0;

for(let d of div){
    d.innerText = `Changed value ${idx}`;
    idx++;
}

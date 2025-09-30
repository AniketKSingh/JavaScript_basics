// let divItem = document.querySelector("#divItem");

// divItem.onclick = () =>{
//     console.log("div was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// select item using querySlector or getElement
// 1. on the same element using <div onclick="console.log(''), ">
// 2. node.event = () => {
    
// };

// let firstP = document.getElementsByClassName("firstPara")[0];

// console.log(firstP);
// console.log(firstP.innerText);
// // firstP.innerText = "changed para";
// console.log(firstP.innerHTML);

// firstP.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

// }

// firstP.onmouseover = (e) =>{
//     console.log(e);
//     console.log(e.type);
// }


let currMode = "light";

// modeBtn.addEventListener("click", () =>{
//     if(currMode === "white"){
//         currMode = "black";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "white";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });
let body = document.querySelector("body");
body.addEventListener("click", () =>{
    if(currMode === "light"){
    body.classList.add("dark");
    body.classList.remove("light");
    currMode = "dark";
    }
    else{
    body.classList.add("light");
    body.classList.remove("dark");
    currMode = "light";
    }
});



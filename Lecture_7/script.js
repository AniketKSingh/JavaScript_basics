// let newBtn = document.createElement("button");
// console.log(newBtn);
// newBtn.innerText = "Click me!";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// newBtn.style.margin = "5px";
// newBtn.style.padding = "5px";


// let root = document.querySelector("body");
// console.log(root);
// root.prepend(newBtn);

// let div = document.querySelector(".box");
// console.log(div);
// console.log(div.getAttribute("class"));
// console.log(div.style);
// div.style.backgroundColor = "purple";
// div.style.fontSize = "2rem";
// div.innerText = "Changed Text";
// div.innerHTML = "<i> New Text </i>";
// // div.style.visibility = "hidden";

// let newPara = document.createElement("p");
// newPara.innerText = "new Para";
// newPara.style.backgroundColor = "black";
// newPara.style.color = "white";

// let body = document.querySelector("body");
// // body.append(newPara);

// // body.prepend(newPara);

// body.before(newPara);

// newPara.remove();

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "pink";
newBtn.style.color = "white";

let div = document.querySelector("div");
div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>New Heading </i>";
newHeading.setAttribute("class","heading");
newHeading.style.color = "dodgeblue";

let bodytag= document.querySelector("body");
bodytag.prepend(newHeading);

let para =document.querySelector(".para");
console.log(para.innerText);
console.log(para.innerHTML);

console.log(para.getAttribute("class"));

console.log(para.classList);

para.classList.add("newPara");
para.classList.remove("para");




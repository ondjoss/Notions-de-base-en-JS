//Gestion des events en JS

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener('click', () =>{
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () =>{
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener('click', () =>{
    response.classList.add("show-response");
    response.style.background = "red";
});

//---------------------------------------------------------
//Mouse Events  

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.border = "2px solid black";
});

window.addEventListener("mouseup", () => {
    mousemove.style.border = "2px solid red";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.5)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "purple";
})

//----------------------------------------------------
//KeyPress Event -:)


const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
});
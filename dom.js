//Gestion des events en JS

const questionContainer = document.querySelector(".click-event");

questionContainer.addEventListener('click', () =>{
    questionContainer.style.background = "red";
});
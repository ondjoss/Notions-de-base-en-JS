//Gestion des events en JS

const questionContainer = document.querySelector(".click-event");

questionContainer.addEventListener('click', () =>{
    questionContainer.classList.toggle("question-clicked");
});
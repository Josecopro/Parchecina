function showLoginForm() {
    var loginForm = document.querySelector('.Login');
    var registerForm = document.querySelector('.Register');
    loginForm.classList.add('Form');
    registerForm.classList.remove('Form');
}

function showRegisterForm() {
    var loginForm = document.querySelector('.Login');
    var registerForm = document.querySelector('.Register');
    registerForm.classList.add('Form');
    loginForm.classList.remove('Form');

}
function Redirect(redirection) {
    window.location.href = redirection;

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
uwu = (getRandomInt(102));
document.getElementById('uwu').innerText = uwu + " %";

var countdownElement = document.getElementById('countdown');
var timeLeft = 35; // Cambia esto al número de segundos que quieras para el contador

var countdownTimer = setInterval(function() {
    if(timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.innerText = "¡Es hora de tomar tu medicamento!";
        window.location.href = 'block.html';

    } else {
        countdownElement.innerText = "Proxima dosis en: " + timeLeft + " segundos";
    }
    timeLeft -= 1;
}, 1000);


var countdownElement2 = document.getElementById('countdown2');
var timeLeftInHours = 5; // Change this to the number of hours you want for the countdown

var countdownTimer2 = setInterval(function() {
    if(timeLeftInHours <= 0) {
        clearInterval(countdownTimer2);
        countdownElement2.innerText = "¡Es hora de tomar tu medicamento!";
    } else {
        countdownElement2.innerText = "Proxima revision es en: " + timeLeftInHours + " horas";
    }
    timeLeftInHours -= Math.round(1/3600, -1);
}, 1000);
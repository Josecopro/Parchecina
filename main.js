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
function Redirect() {
    window.location.href = "uwu.html";

}

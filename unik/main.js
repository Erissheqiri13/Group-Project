const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


const loginForm = document.querySelector('.sign-in-container form');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === '' || password === ''){
        alert('Fill all fields!');
        return;
    }

    if(password.length < 6){
        alert('Password must be at least 6 characters!');
        return;
    }

    alert('Login successful!');
});

$("#signUp").click(function(){
    $(".container").fadeOut(200).fadeIn(200);
});

$(document).ready(function(){

    $("#showMessage").click(function(){
        $("#message").fadeToggle();
    });

});

$(document).ready(function(){

    $("#learnMore").click(function(){
        $("#infoBox").slideToggle();
    });

});
// All DOM elements
const form = document.querySelector('#signup_panel');
const email = document.querySelector('#loging_email');
const password = document.querySelector('#loging_password');

// Login events
form.addEventListener("submit", function(e) {
    
    if(email.value === "ana.faria@gmail.com" && password.value === "123"){
        form.action = "index.html";
        return;
    }

    email.value = "";
    password.value = "";
    e.preventDefault();
});
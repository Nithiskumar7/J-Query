let form = document.getElementById("form");
let username = document.getElementById("username");
let email =  document.getElementById("email");


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateinputs();
});

let setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

let setSuccess = element => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

let validateinputs = () => {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();


if(usernameValue === ''){
    setError(username, 'Username is required');
}else{
    setSuccess(username);
}

if(emailValue === ''){
    setError(email, 'Email is required');
}else{
    setSuccess(email);
}
};
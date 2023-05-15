let title = document.getElementById("title");
let h1 = document.getElementById("h1");
let email = document.getElementById("email") ;
let password = document.getElementById("password") ;
let confirmPassword = document.getElementById("confirmPassword")
let comfirmPasswordFile = document.getElementById("comfirmPasswordFile");
let singInBtn = document.getElementById("singIn");
let singUpBtn = document.getElementById("singUp");
let lostPassword = document.getElementById("lostPassword");
let error = document.getElementById("error");

singInBtn.style.background = "Grey";

singInBtn.addEventListener('click', function(){
    if(h1.textContent === "Registration")
    {
        password.value = "";
        email.value = "";
        confirmPassword.value = "";
        error.style.display = 'none';
    }

    h1.textContent = 'Log In';
    h1.style.marginLeft = '34%'

    comfirmPasswordFile.style.display = 'none';

    lostPassword.style.fontSize = 'smaller';

    singUpBtn.style.background = "Grey"
    singInBtn.style.background = "linear-gradient(to right, #1616FF, #4444FF)"
})

singUpBtn.addEventListener('click', function(){

    if(h1.textContent === "Log In")
    {
        password.value = "";
        email.value = "";
        confirmPassword.value = "";
    }

    h1.textContent = 'Registration';
    h1.style.marginLeft = '19%'

    comfirmPasswordFile.style.display = 'flex';

    lostPassword.style.fontSize = '0%';

    singInBtn.style.background = "Grey"
    singUpBtn.style.background = "linear-gradient(to right, #1616FF, #4444FF)"

})
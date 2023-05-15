//import bcrypt from 'bcrypt'

// Registration validation

// Не ми се получи с презаписването на json файла,
// затова направих един масив в който да добавям
// новите регистрации.

let data = [];

if(h1.textContent === "Registration")
{

    singUpBtn.addEventListener('click', function(){
        let emailTxt = email.value;
        let passwordTxt = password.value;
        let confirmPasswordTxt = confirmPassword.value;

        comfirmPasswordFile.style.marginBottom = "30px";
        error.style.display = 'none';
        
        isEmailExist(emailTxt).then((bool) => {
            if((bool || isEmailExist2(data, emailTxt)) && emailTxt != ""){
                comfirmPasswordFile.style.marginBottom = "0px";
                error.textContent = 'Email exists!'
                error.style.color = "red";
                error.style.display = 'flex';
            } else if (validEmail(emailTxt) && validPassword(passwordTxt) && 
                validConfirmPassword(passwordTxt, confirmPasswordTxt) && emailTxt != ""){
    
                
                const newObject = {
                    email: emailTxt,
                    password: passwordTxt
                }
                 
                data.push(newObject);

                comfirmPasswordFile.style.marginBottom = "0px";
                error.textContent = 'Succesful Registration!'
                error.style.display = 'flex'
                error.style.color = "green";

                password.value = "";
                email.value = "";
                confirmPassword.value = "";
            }
        });

        if(validEmail(emailTxt) === false)
        {
            error.style.color = "red";
            comfirmPasswordFile.style.marginBottom = "0px";
            error.textContent = 'Invalid email!'
            error.style.display = 'flex';
        }

        if(validPassword(passwordTxt) === false)
        {
            error.style.color = "red";
            comfirmPasswordFile.style.marginBottom = "0%";
            error.textContent = 'Password must be at least 6 symbols!'
            error.style.display = 'flex';
        }

        if(validConfirmPassword(passwordTxt, confirmPasswordTxt) === false
            && confirmPasswordTxt != "")
        {
            error.style.color = "red";
            comfirmPasswordFile.style.marginBottom = "0%";
            error.textContent = 'The passwords do not match!'
            error.style.display = 'flex';
        }
    })
}

function validEmail(emailTxt){
    if( emailTxt === '')
    {
        return true;
    }
    for(let i = 0; i < emailTxt.length; i++)
    {
        if(emailTxt[i] === '@')
        {
            return true;
        }
    }
    return false;
}

function validPassword(passwordTxt){
    if( passwordTxt === '')
    {
        return true;
    }
    if(passwordTxt.length < 6)
    {
        return false;
    }
    return true;
}

function validConfirmPassword(passwordTxt, confirmPasswordTxt){

    if(passwordTxt.length != confirmPasswordTxt.length)
    {
        return false;
    }

    for(let i = 0; i < passwordTxt.length; i++)
    {
        if(passwordTxt[i] != confirmPasswordTxt[i])
        {
            return false;
        }
    }
    return true;
}


async function isEmailExist(email){

    const response = await fetch("data.json");
        
    const object = await response.json();

    for(let i = 0; i < object.length; i++)
    {
        if(object[i].email === email)
        {
            return true;
        }
    }
    return false;
}

function isEmailExist2(data, email){
    for(let i = 0; i < data.length; i++){
        if(data[i].email === email){
            return true;
        }
    }
    return false;
}

// Log In validation

singInBtn.addEventListener('click', function(){
    let emailTxt = email.value;
    let passwordTxt = password.value;

    fetch("data.json")
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            if(emailTxt != "" && passwordTxt != ""){
                if(isAccauntExist(emailTxt, passwordTxt, object) || isAccauntExist2(data, emailTxt, passwordTxt))
                {
                    error.textContent = 'Login successful!';
                    error.style.color = "green";
                    error.style.display = 'flex';
                } else{
                    error.textContent = "Wrong email or password!";
                    error.style.color = "red";
                    error.style.display = 'flex';
                }
            }
        })
        .catch(function(error){
            console.log("Something went wrong with data!");
        })
})


function isAccauntExist(email, password, object){
    for(let i = 0; i < object.length; i++)
    {
        if(object[i].email === email && object[i].password === password)
        {
            return true;
        }
    }
    return false;
}

function isAccauntExist2(data, email, password){
    for(let i = 0; i < data.length; i++){
        if(data[i].email === email && data[i].password === password){
            return true;
        }
    }
    return false;
}





function onChangeEmail(){
    toggleButtonDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    toggleButtonDisable();
    togglePasswordErrors();
}

function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value,form.password().value
    ).then(response => {
        hideLoading();
        window.location.href="paginas/home/home.html";
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado!";
    }
    if (error.code == "auth/wrong-password"){
        return "Senha inválida!";
    }
    return error.message;
}

function register(){
    window.location.href = "paginas/registro/register.html";
}

function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert("Email enviado com sucesso");
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}

function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none": "block";
    form.emailInvalidError().style.display = validarEmail(email)? "none": "block";
}

function togglePasswordErrors(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password? "none":"block";
}

function toggleButtonDisable(){
    const emailValido = emailValidado();
    form.recoverPassword().disabled = !emailValido;
    const passwordValida = senhaValida();
    form.loginButton().disabled = !emailValido || !passwordValida;
}

function emailValidado(){
    const email = form.email().value;
    if (!email){
        return false;
    }
    return validarEmail(email);
}

function senhaValida(){
    const password = form.password().value;
    if (!password){
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPassword: () => document.getElementById("recover-password-button"),
}
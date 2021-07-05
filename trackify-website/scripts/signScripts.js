let info = document.location.search.replace(/^.*?\=/, "");
// localStorage.getItem('isSingIn');
console.log(info);
function startPage(isSignIn) {
    if (isSignIn == "true") {
        let signIn = document.getElementById("sign-in");
        let signUp = document.getElementById("sign-up");
        let background = document.getElementById("background-btn");
        let formSignUp = document.getElementById("formSignUp");
        let formSignIn = document.getElementById("formSignIn");
        background.style.right = "92px";
        formSignIn.style.display = "block";
        formSignUp.style.display = "none";
        signUp.style.color = "#595959";
        signIn.style.color = "white";
    }
    else {
        let signIn = document.getElementById("sign-in");
        let signUp = document.getElementById("sign-up");
        let background = document.getElementById("background-btn");
        let formSignUp = document.getElementById("formSignUp");
        let formSignIn = document.getElementById("formSignIn");
        background.style.right = "4px";
        formSignUp.style.display = "block";
        formSignIn.style.display = "none";
        signIn.style.color = "#595959";
        signUp.style.color = "white";
    }
}
startPage(info);
function clickSignButtons() {
    let signIn = document.getElementById("sign-in");
    let signUp = document.getElementById("sign-up");
    let background = document.getElementById("background-btn");
    let formSignUp = document.getElementById("formSignUp");
    let formSignIn = document.getElementById("formSignIn");
    signIn.addEventListener("click", function () {
        background.style.right = "92px";
        formSignIn.style.display = "block";
        formSignUp.style.display = "none";
        signUp.style.color = "#595959";
        signIn.style.color = "white";
    });
    signUp.addEventListener("click", function () {
        background.style.right = "4px";
        formSignUp.style.display = "block";
        formSignIn.style.display = "none";
        signIn.style.color = "#595959";
        signUp.style.color = "white";
    });
}
clickSignButtons();

function eyeConfig() {
    let viewIcon = "./assets/icons/view.svg";
    let hideIcon = "./assets/icons/visibility.svg";
    for (let index = 1; index <= 4; index++) {
        let eye = document.getElementById("eye" + index);
        let password = document.getElementById("password" + index);
        eye.addEventListener("click", function () {
            if (password.type == "password") {
                password.type = "text";
                eye.src = hideIcon;
            }
            else {
                password.type = "password";
                eye.src = viewIcon;
            }
        })

    }

}
eyeConfig();
function loginWith() {
    let mssg = document.getElementById("login-with-email");
    let inputs = document.getElementsByClassName("inputs");
    mssg.addEventListener("click", function () {
        if (mssg.innerText == "connecter avec numero de telephone") {
            mssg.innerText = "connecter avec l'email";
        }
        else {
            mssg.innerText = "connecter avec numero de telephone";
        }
        for (let index = 0; index < inputs.length; index++) {
            inputs[index].classList.toggle("hide");
        }
    });
}
loginWith();

function requiredInputFeild() {
    let inputs = document.getElementsByClassName("inputs-up");
    let mssg = document.getElementsByClassName("required");
    let x = true;
    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].value.length == 0 || inputs[index].value == undefined) {
            inputs[index].style = "border: 1px solid red";
            mssg[index].style.display = "inline";
            x = false;
        }

    }
    return x;
}
function deleteErreurBehavior() {
    let inputs = document.getElementsByClassName("inputs-up");
    let mssg = document.getElementsByClassName("required");
    for (let index = 0; index < inputs.length; index++) {
        //inputs[index].addEventListener("oninput", function () {
        if (inputs[index].value.length > 0) {
            inputs[index].style = "border: none";
            mssg[index].style.display = "none";
        }

        //})
    }
}

function sign() {
    let signinBtn = document.getElementById("sign-up-btn");
    signinBtn.addEventListener("click", function () {
        // localStorage.setItem('isSignIn', 'false');
        //window.location = "./sign.html" + "?isSignIn=" + "false";
        window.location = "./sign.html" + "?isSignIn=" + "false";
    });
    let getStartedBtn = document.getElementById("get-started-btn");
    getStartedBtn.addEventListener("click", function () {
        // localStorage.setItem('isSignIn', 'false');
        //window.location = "./sign.html" + "?isSignIn=" + "false";
        window.location = "./sign.html" + "?isSignIn=" + "false";
    });
    let loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function () {
        // localStorage.setItem('isSignIn', 'true');
        //window.location = "./sign.html" + "?isSignIn=" + "true";
        window.location = "./sign.html" + "?isSignIn=" + "true";
    });
    let loginMenuBtn = document.getElementById("login-menu-btn");
    loginMenuBtn.addEventListener("click", function () {
        // localStorage.setItem('isSignIn', 'true');
        //window.location = "./sign.html" + "?isSignIn=" + "true";
        window.location = "./sign.html" + "?isSignIn=" + "true";
    });
}
sign();


function configBurgerMenuIcon() {
    let burgerMenu = document.getElementById("burgerMenuContainer");
    let icon = document.getElementById("hum");
    if (icon.classList.contains("active")) {
        burgerMenu.style.position = "fixed";
        burgerMenu.style.right = "0";
        burgerMenu.style.top = "0";
        icon.style.position = "fixed";
        icon.style.right = "20px";
        icon.style.top = "20px";
        burgerMenu.style.display = "block";
    }
    else {
        burgerMenu.style.position = "absolute";
        icon.style.position = "absolute";
        icon.style.right = "0px";
        icon.style.top = "0px";
        burgerMenu.style.right = "0";
        burgerMenu.style.top = "0";
        burgerMenu.style.display = "none";
    }
}
function burgerMenuAnimation() {
    let icon = document.getElementById("hum");
    icon.addEventListener("click", configBurgerMenuIcon);
}

burgerMenuAnimation();

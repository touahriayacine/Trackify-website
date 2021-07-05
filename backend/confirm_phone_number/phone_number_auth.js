window.onload=function () {
  render();
};

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptcha_container_id);
    recaptchaVerifier.render();
}


phoneNumber = localStorage.getItem('phoneNumber');
Email = localStorage.getItem('email');
firstname = localStorage.getItem('firstname');
surname = localStorage.getItem('surname');
Password = localStorage.getItem('password');
operation = localStorage.getItem('operation');


document.getElementById(phone_number_id).value = phoneNumber;
console.log(phoneNumber);
console.log(localStorage.getItem('firstname')+' '+localStorage.getItem('surname')+
            ' '+localStorage.getItem('password')+' '+phoneNumber+' '+localStorage.getItem('email')+' '+operation);
        //  signUp();


function phoneAuth() {
    var phoneNumber =document.getElementById(phone_number_id).value;
    firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
    .then(function (confirmationResult) {
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
    }).catch(function (error) {
        alert(error.message);
    });
}




function signUpWithEmail(){
    const promise = auth.createUserWithEmailAndPassword(localStorage.getItem('email'),localStorage.getItem('password'));
    console.log('count email creating');
    promise.catch(e =>alert (e.message));
}

function signUp(){
    console.log('in sign up');
    cloudDB.collection("DRIVER").doc(phoneNumber).set({
            firstName : firstname,
            surName: surname,
            password: sha256(Password),
            email : Email
        })
        .then(function(){
            console.log('sign up success');
            signUpWithEmail();
            localStorage.setItem('firstname' , firstname);
            localStorage.setItem('surname' , surname);
            localStorage.setItem('phoneNumber' , phoneNumber);
            localStorage.setItem('email' ,  Email);
            localStorage.setItem('password' , Password);
            window.location = 'dashboard.html';
        })
        .catch(function(error){
            console.error("error adding document" , error);
        });
}



function codeVerify() {
    var confirmCode = document.getElementById(confirm_code_id).value;
    coderesult.confirm(confirmCode).then(function (result) {
        var user = result.user;
        signUp();
    }).catch(function (error) {
        alert(error.message);
    });
}



const form = document.getElementById('confirm_phone_form');
form.addEventListener('submit' , (e) => {
    e.preventDefault();
}) 

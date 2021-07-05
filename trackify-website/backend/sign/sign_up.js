function passwordValidation() {
    return (passwordsEqualityValidation && passwordDigitsValidation && passwordUppercaseValidation
        && passwordLengthValidation && passwordSpecialCharValidation);
}

function inputValidation() {
    let validate = true;
    if (firstname == null || firstname.length == 0) {
        document.getElementById(firstname_errors_id).innerHTML = 'firstname required *';
        document.getElementById(firstname_errors_id).className = controls_not_done_class_name;
        validate = false;
    } else {
        document.getElementById(firstname_errors_id).innerHTML = '';
    }

    if (surname == null || surname.length == 0) {
        document.getElementById(surname_errors_id).innerHTML = 'surname required *';
        document.getElementById(surname_errors_id).className = controls_not_done_class_name;
        validate = false;
    } else {
        document.getElementById(surname_errors_id).innerHTML = '';
    }

    if (phoneNumber == null || phoneNumber.length < 11) {
        validate = false;
    }

    if (email == null || email.length == 0) {
        document.getElementById(email_errors_id).innerHTML = 'email required *';
        document.getElementById(email_errors_id).className = controls_not_done_class_name;
        validate = false;
    } else {
        document.getElementById(email_errors_id).innerHTML = '';
    }

    if (!passwordValidation()) {
        validate = false;
    }

    return validate;
}

function signUpWithEmail() {
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.message));
}


function signUp() {
    //if(inputValidation()){
    /*cloudDB.collection("DRIVER").doc(phoneNumber).set(
         {
             firstName : firstname.toLowerCase(),
             surName: surname.toLowerCase(),
             password: sha256(password),
             email : email
         })
     .then(function(){
         signUpWithEmail();
         localStorage.setItem('firstname' , firstname);
         localStorage.setItem('surname' , surname);
         localStorage.setItem('phoneNumber' , phoneNumber);
         localStorage.setItem('email' , email);
         localStorage.setItem('password' , password);
         console.log('success');
         localStorage.setItem('textvalue' , phoneNumber);
        
     //  window.location = 'confirm_phone_number.html';
     })
     .catch(function(error){
     console.error("error adding document" , error);
     });*/
    if (!passwordValidation()) {
        return;
    }
    localStorage.setItem('operation', 'signup');
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('surname', surname);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location = 'confirm_phone_number.html';
    //    }
}


document.getElementById(sign_up_btn_id).onclick = function () {
    if (requiredInputFeild() && inputValidation)
        signUp();
}




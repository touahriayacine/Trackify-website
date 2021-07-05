function sendSms() {
    let sendBtn = document.getElementById("send-sms");
    sendBtn.addEventListener("click", function () {
        //envoyer sms
        console.log("envoyer sms");
    });
}
sendSms();

function signInWithPhone() {

    /*cloudDB.collection(DRIVER_FIRESTORE).doc(phoneNumber).get()
    .then(function(doc){
        if(doc.exists){
            if(doc.data().password == sha256(password)){
                localStorage.setItem('phoneNumber' , phoneNumber);
                window.location = 'dashboard.html';
            }
            else{
                alert('ERROR , Incorrect password');
            }
        }
        else{
            alert('ERROR, this user is not existing');
        }
    })
    .catch(function(error){
        console.error("ERROR SIGH IN", error);
    });*/
    // window.location = 'confirm_phone_number.html';
    codeVerify();
    console.log("sign in with phone number");
}

function signInWithEmail() {
    console.log('email: '+email+' '+'password: '+password);
    const promise = auth.signInWithEmailAndPassword(email, password)
    .then(()=>{
        cloudDB.collection('DRIVER').where('email', '==', email).get()
         .then((snapshot) => {
             snapshot.docs.forEach(doc => {
                 console.log(doc.id);
                 phoneNumber = doc.id;
             });
         })
         .then(()=>{
            localStorage.setItem('phoneNumber', phoneNumber);
            window.location = 'dashboard.html';
         })
    })
    .catch(()=>{
        promise.catch(e => alert(e.message));
    })
    promise.catch(e => alert(e.message));
    console.log("sign in with email");
}


function login() {
    let loginBtn = document.getElementById("login");
    let emailInput = document.getElementById("email2");
    loginBtn.addEventListener("click", function () {
        if (emailInput.classList.contains("hide")) {
            //sign in with phone number
            signInWithPhone();
        }
        else {
            signInWithEmail();

        }
    });
}

login();


// document.getElementById('signInWithPhone').onclick = function () {
//     localStorage.setItem('operation', 'signin');
//     signInWithPhone();
//     //localStorage.setItem('textvalue' , phoneNumber);
//     //window.location = 'dashboard.html';
// }




// document.getElementById('signInWithEmail').onclick = function(){
//     signInWithEmail();
// }



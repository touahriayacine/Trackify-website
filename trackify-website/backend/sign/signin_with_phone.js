window.onload=function () {
    render();
  };
  
  function render() {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptcha_container_id);
      recaptchaVerifier.render();
  }
  

  
  
  function phoneAuth() {
      //var phoneNumber2 =document.getElementById('phoneNumber').value;
      //console.log(phoneNumber2);
      console.log(phoneNumber);
      firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
      .then(function (confirmationResult) {
          window.confirmationResult=confirmationResult;
          coderesult=confirmationResult;
      }).catch(function (error) {
          alert(error.message);
      });
  }
  
  
  
  function codeVerify() {
      var confirmCode = document.getElementById('password4').value;
      coderesult.confirm(confirmCode).then(function (result) {
          var user = result.user;
          localStorage.setItem('phoneNumber', phoneNumber);
          window.location = 'dashboard.html';
      }).catch(function (error) {
          alert(error.message);
      });
  }
  
  
  
  /*const form = document.getElementById('confirm_phone_form');
  form.addEventListener('submit' , (e) => {
      e.preventDefault();
  }) 
  */

document.getElementById('send-sms').onclick = function(){
    phoneAuth();
}
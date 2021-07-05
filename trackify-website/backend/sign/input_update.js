firstNameT = document.getElementById(firstname_id);
surNameT = document.getElementById(surname_id);
phoneNumberT = document.getElementById(phone_number_id);
passwordT = document.getElementById(password_id);
confirmPasswordT = document.getElementById(confirm_password_id);
emailT = document.getElementById(email_id);


firstName = firstNameT.value;
surName = surNameT.value;
phoneNumber = phoneNumberT.value;
password = phoneNumberT.value;
email = emailT.value;


function passwordUpperCase(number_of_upper_case){
    if(number_of_upper_case >= 2){
        document.getElementById(controls_uppercase_id).className = controls_done_class_name;
        passwordUppercaseValidation = true;
    }else{
        document.getElementById(controls_uppercase_id).className = controls_not_done_class_name;
        passwordUppercaseValidation = false;
    }
}


function passwordSpecialChar(number_of_special_char){
    if(number_of_special_char >= 2){
        document.getElementById(controls_special_char_id).className = controls_done_class_name;
        passwordSpecialCharValidation = true;
    }else{
        document.getElementById(controls_special_char_id).className = controls_not_done_class_name;
        passwordSpecialCharValidation = false;
    }
}


function passwordDigits(number_of_degits){
    if(number_of_degits >=2){
        document.getElementById(controls_digits_id).className = controls_done_class_name;
        passwordDigitsValidation = true;
    }else{
        document.getElementById(controls_digits_id).className = controls_not_done_class_name;
        passwordDigitsValidation = false;
    }
}


function passwordLength(password){
    if(password.length < 8){
       document.getElementById(controls_length_id).className = controls_not_done_class_name;
       passwordLengthValidation = false;
    }else{
        document.getElementById(controls_length_id).className = controls_done_class_name;
        passwordLengthValidation = true;
    }
}


function passwordsEquality(password , confirmPassword){
    if(confirmPassword != password){
        document.getElementById(controls_passwords_equality_id).className = controls_not_done_class_name;
        passwordsEqualityValidation = false;
    }else{
        document.getElementById(controls_passwords_equality_id).className = controls_done_class_name;
        passwordsEqualityValidation = true;
    }
}


function verficationPassword(password){
    for(var i=0 ; i <password.length ; i++){
        var char = password.charAt(i);
        if(special_char.test(char)){
            number_of_special_char++;
        }else{
            if(!isNaN(char*1)){
                number_of_degits++;
            }else{
                if(char == char.toUpperCase()){
                    number_of_upper_case++;
                }
            }
        }
    }

    passwordUpperCase(number_of_upper_case);
    passwordSpecialChar(number_of_special_char);
    passwordDigits(number_of_degits);
    passwordLength(password);
    passwordsEquality(password ,  confirmPassword);

    number_of_special_char=0;
    number_of_upper_case=0;
    number_of_degits=0;
}


function verficationPhoneNumber(phoneNumber){
    if(!phoneNumber.startsWith('+') || phoneNumber.length < 11){
        document.getElementById(controls_phone_id).className = controls_not_done_class_name;
    }else{
        document.getElementById(controls_phone_id).className = controls_done_class_name;
    }
}


function Update(val , type){
    switch(type){
        case firstname_id:
            firstname = val;
            //console.log('firstname :'+firstname);
            //document.getElementById(firstname_errors_id).innerHTML = '';
            break;

        case surname_id:
            surname = val;
            //console.log('surname :'+surname);
            //document.getElementById(surname_errors_id).innerHTML = '';
            break;

        case email_id:
            email = val;
            //console.log('email :'+email);
            //document.getElementById(emil_errors_id).innerHTML = '';
            break;

        case "email2":
            email = val;
            //console.log('email2 :'+email);
            //document.getElementById(emil_errors_id).innerHTML = '';
            break;

        case phone_number_id:
            phoneNumber = val;
            //console.log('phonenumber :'+phoneNumber);
            verficationPhoneNumber(phoneNumber);
            break;

        case password_id:
            password = val;
            //console.log('password :'+password);
            verficationPassword(password);
            break;

        case confirm_password_id:
            confirmPassword = val;
            //console.log('confirmpasswd :'+confirmPassword);
            verficationPassword(confirmPassword);
            break;

        case password3_id:
            password = val;
            //console.log('password3 :'+password);
            break;
        
        case 'password4':
            password = val;
            //console.log('password4 :'+password);
            break; 
    }    
}


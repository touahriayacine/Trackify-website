phoneNumber = localStorage.getItem('phoneNumber');
console.log(phoneNumber);




function addCar(){
    carPhoneNumber = document.getElementById(car_phone_id).value;
    carPassword = document.getElementById(car_password_id).value;
    alert(carPassword + '   '+carPhoneNumber);
    cloudDB.collection("CAR").doc(carPhoneNumber).get()
    .then(function(doc){
        if(doc.exists){
            if(doc.data().privateCode == sha256(carPassword)){
                cloudDB.collection("DRIVER").doc(phoneNumber).collection("CARS").doc(carPhoneNumber)
                .set({}).then(function(){
                    //alert("car added with success");
                    window.location = "dashboard.html";
                })
            }else{
                alert("incorrect car passord , retry");
            }
        }
        else{
            alert("this car dosn't exist");
        }
    })
    .catch(function(error){
        console.error("error adding car to carlist of driver", error);
    });
}





const form = document.getElementById('add_car_form');
form.addEventListener('submit' , (e) => {
    e.preventDefault();
    addCar();
}) 

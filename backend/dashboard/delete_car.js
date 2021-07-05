function deleteCar(){
    console.log(carPhoneNumber);
    cloudDB.collection('DRIVER').doc(phoneNumber).collection('CARS').doc(carPhoneNumber).delete()
    .then(function(){
        console.log("car deleted");
        window.location = 'dashboard.html';
    })
    .catch(function(error){
        console.error("error deleting car" , error);
    })
}

document.getElementById('confirm-delete').onclick = function(){
    deleteCar();
}
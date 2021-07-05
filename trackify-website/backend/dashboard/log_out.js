window.history.forward();

function logOut(){
    positions = [];
    cars = [];
    auth.signOut()
    .then(()=>{
        localStorage.setItem('firstname', '');
        localStorage.setItem('surname', '');
        localStorage.setItem('phoneNumber', '');
        localStorage.setItem('email', '');
        localStorage.setItem('password', '');
        logged=false;
        window.location='sign.html';
    })
}
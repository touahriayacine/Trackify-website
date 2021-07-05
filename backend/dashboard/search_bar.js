function showOnMap(){
    let map = document.getElementById('map');
    let place = document.getElementById('search').value;
    if(place.includes(',')){
        let coordinates = place.split(',');
        let latitude = coordinates[0];
        let longitude = coordinates[1];
        map.innerHTML = `
            <iframe width="100%" height="500" src="https://maps.google.com/maps?q=${latitude},${longitude}&output=embed">
            </iframe>
        `;
    }else{
        map.innerHTML = `
        <iframe width="100%" height="500" src="https://maps.google.com/maps?q=${place};&output=embed">
        </iframe>
    `;
    }

        
}


let searchBar = document.querySelector('input');
searchBar.addEventListener('keydown' , function(){
    let code = event.keyCode || event.which;
    if(code == 13){
        showOnMap();
    }
});




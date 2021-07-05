function showPositionOnMap(index) {
    let map = document.getElementById('map');
    let latitude = positions[index].latitude;
    let longitude = positions[index].longitude;
    map.innerHTML = `
        <iframe width="100%" height="500" src="https://maps.google.com/maps?q=${latitude},${longitude}&output=embed">
        </iframe>
    `;
}


function formatingDate(date_milliseconds) {
    var date = new Date(date_milliseconds);
    return date.toLocaleDateString(undefined, options);
}

function formatingHour(date_milliseconds) {
    var date = new Date(date_milliseconds);
    return date.toLocaleTimeString();
}


/*
function car_positions(carphone) {
    let table = document.getElementById('positionsTable');
    table.innerHTML = '';
    let template = '';

    cloudDB.collection("CAR").doc(carphone).collection("POSITION").get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                positions.push({ 'date': doc.id, 'hour': doc.id, 'latitude': doc.data().latitude, 'longitude': doc.data().longitude });
                if (positions.length == 1) {
                    template +=
                        `
            <tr class = "slct-item" onclick="selectPosition();">
                <td>${formatingDate(Number(doc.id))}</td>
                <td>${formatingHour(Number(doc.id))}</td>
                <td>${doc.data().latitude}</td>
                <td>${doc.data().longitude}</td>
            </tr>
                `;
                    showPositionOnMap(0);

                } else {
                    template += `
            <tr onclick="selectPosition();">
                <td>${formatingDate(Number(doc.id))}</td>
                <td>${formatingHour(Number(doc.id))}</td>
                <td>${doc.data().latitude}</td>
                <td>${doc.data().longitude}</td>
            </tr>
                `;
                }
                table.innerHTML += template;
                template = '';
            })
        })
}
*/










function car_positions(carphone) {
    let table = document.getElementById('positionsTable');
    table.innerHTML = '';
    let template = '';
    console.log(carphone);
    cloudDB.collection("CAR").doc(carphone).collection("POSITION").get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                positions.unshift({ 'date': doc.id, 'latitude': doc.data().latitude, 'longitude': doc.data().longitude });

            })
        }).then(() => {
            for (let index = 0; index < positions.length; index++) {
                console.log(positions[index]);
                template += `
                    <tr onclick="selectPosition();">
                    <td>${formatingDate(Number(positions[index].date))}</td>
                    <td>${formatingHour(Number(positions[index].date))}</td>
                    <td>${positions[index].latitude}</td>
                    <td>${positions[index].longitude}</td>
                    </tr>
                `;
                table.innerHTML += template;
                template = '';
                if (index == 0) {
                    showPositionOnMap(0);
                }
            }

        });

}










function car_positions2(carphone) {
    positions = [];
    cloudDB.collection("CAR").doc(carphone).collection("POSITION").get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                positions.unshift({ 'date': doc.id, 'latitude': doc.data().latitude, 'longitude': doc.data().longitude });

            })
        })

}

function add(tableID , dateString , hourString , latitudeString , longitudeString) {
    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(0);

    let dateCell = newRow.insertCell(0);
    let date = document.createTextNode(dateString);
    dateCell.appendChild(date);
    
    let hourCell = newRow.insertCell(1);
    let hour = document.createTextNode(hourString);
    hourCell.appendChild(hour);

    let latitudeCell = newRow.insertCell(2);
    let latitude = document.createTextNode(latitudeString);
    latitudeCell.appendChild(latitude);

    let longitudeCell = newRow.insertCell(3);
    let longitude = document.createTextNode(longitudeString);
    longitudeCell.appendChild(longitude);


}


function continousTracking(){
    var vertiualPositions = new Array();
    let phone = localStorage.getItem('phonecarfortracking'); 
    cloudDB.collection("CAR").doc(phone).collection("POSITION").get()
        .then(querySnapshot => {

            querySnapshot.forEach(doc => {
                vertiualPositions.unshift({ 'date': doc.id, 'latitude': doc.data().latitude, 'longitude': doc.data().longitude });            
            })
        }).then(()=>{
            console.log(vertiualPositions.length + ' ' + positions.length);
            console.log(phone)
            if(vertiualPositions.length > positions.length){
                console.log('positions changed');
                positions = [];
                positions = vertiualPositions;          
                add('positionsTable' , formatingDate(Number(vertiualPositions[0].date)) ,
                 formatingHour(Number(vertiualPositions[0].date)) ,
                 vertiualPositions[0].latitude , 
                 vertiualPositions[0].longitude);
                car_positions2(phone);
            }
            //vertiualPositions = [];
        })    

    setTimeout(continousTracking, 5000 );
}




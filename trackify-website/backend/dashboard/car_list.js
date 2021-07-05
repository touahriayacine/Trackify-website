phoneNumber = phoneNumber = localStorage.getItem('phoneNumber');


function ReadCarList() {

    let table = document.getElementById('carListTable');
    let template = '';

    console.log('collection driver ' + phoneNumber + ' cars :');
    cloudDB.collection("DRIVER").doc(phoneNumber).collection("CARS").get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                cloudDB.collection("CAR").doc(doc.id).get()
                    .then(function (doc) {
                        if (doc.exists) {
                            carModele = doc.data().model;
                            carMatricule = doc.data().matricule;
                            carMarque = doc.data().marque;
                            console.log('albanan ' + carMarque + ' ' + carModele + ' ' + carMatricule);
                            cars.push(doc.id);
                            if (cars.length == 1) {
                                template += `
                        <tr class="selected" onclick="selectCar();">
                            <td> ${carMatricule} </td>
                            <td> ${carMarque} </td>
                            <td> ${carModele} </td>
                            <td> ${doc.id} </td>                                                    
                            <td class="delete" onclick = "showDeleteCarForm();"><img src="../assets/icons/trash.svg"
                                        alt="trash">
                        </tr>
                    `;
                                car_detail(cars[0]);
                                car_positions(cars[0]);
                                localStorage.setItem('phonecarfortracking' , cars[0]);
                                continousTracking();
                                carPhoneNumber = cars[0];

                            } else {
                                template += `
                        <tr onclick="selectCar();">
                            <td> ${carMatricule} </td>
                            <td> ${carMarque} </td>
                            <td> ${carModele} </td>
                            <td> ${doc.id} </td>                                                    
                            <td class="delete" onclick = "showDeleteCarForm();"><img src="../assets/icons/trash.svg"
                                        alt="trash">
                            </tr>
                    `;
                            }
                            table.innerHTML += template;
                            template = '';
                        }
                        else {
                            alert("car dosn't esxist");
                        }
                    });
            });
        });



}
ReadCarList();

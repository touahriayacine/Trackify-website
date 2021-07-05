function car_detail(carphone){
    let table = document.getElementById('carDetails');
    table.innerHTML = '';
    let template='';
    cloudDB.collection(CAR_FIRESTORE).doc(carphone).get()
        .then(function(doc)
        {
            if(doc.exists)
            {
                    carMarque = doc.data().marque;
                    carModele = doc.data().model;
                    carMatricule = doc.data().matricule;
                    carPassword = doc.data().password;
                    template =`

                    <tr>
                        <th>mark</th>
                            <td>${carMarque}</td>
                    </tr>
                    <tr>
                        <th>model</th>
                            <td>${carModele}</td>
                    </tr>
                    <tr>
                        <th>N<sup>o</sup></th>
                            <td>${carphone}</td>
                    </tr>
                    <tr>
                        <th>register</th>
                            <td>${carMatricule}</td>
                    </tr>
                    `;
                    table.innerHTML = template;
                    template ='';
                    
            }
        });
}







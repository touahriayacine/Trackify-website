function selectCar(){
    var index  , table = document.getElementById('carListTable');
    for(var i = 0 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function(){
            if(typeof previousCar  != null){
                table.rows[previousCar].className = '';
            }
            index = this.rowIndex;
            previousCar = index;
            this.className = 'selected';
            positions = [];
            car_detail(cars[index-1]);
            car_positions(cars[index-1]);
            carPhoneNumber = cars[index-1];
            localStorage.setItem('phonecarfortracking' , carPhoneNumber);
        }
    }
}

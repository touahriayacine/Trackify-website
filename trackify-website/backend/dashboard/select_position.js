function selectPosition(){
    var index  , table = document.getElementById('positionsTable');
    for(var i = 0 ; i < table.rows.length ; i++){
        table.rows[i].onclick = function(){
            if(typeof previousPosition  != null){
                table.rows[previousPosition].className = '';
            }
        index = this.rowIndex;
        previousPosition = index;
        this.className = 'slct-item';
        showPositionOnMap(index);
        }
    }
}


//Responsive Table script

$(document).ready( function () {
var tables = $('.reponsive-table');

if (tables.length == 1){
	var headers = $('.reponsive-table thead th');
	var tds = $('.reponsive-table td');

	for( j = 0; j < headers.length ; j++){
		$('.reponsive-table td[data-head="'+(j+1)+'"]').attr( 'data-head', $('.reponsive-table thead th')[j].outerText );
	}
	
}



});
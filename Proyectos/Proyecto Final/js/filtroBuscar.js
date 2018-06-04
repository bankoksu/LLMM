/*Filtro buscar*/
/*https://www.w3schools.com/jquery/jquery_filters.asp*/
$(document).ready(function(){
		$("#myInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#myDIV *").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});

$(document).ready(function(){
	var estado = true;
 
	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();
 
		if (estado == false) {
			$(this).text("// Contactos //");
			$('body').css({
				"overflow": "auto"
			});
			estado = true;
		} else {
			$(this).text("// Sobre nosotras //");
			$('body').css({
				"overflow": "hidden"
			});
			estado = false;
		}
	});
});
$(function() {

	$(".sidebar-menu li a").on("click", irA);
});


function irA(event) {
	event.preventDefault();
	var tamaño = $(window).width();
	var quitar = 120;
	/*if(tamaño <= 367) {
		quitar = 494;
	} else if(tamaño >= 368 && tamaño <= 560) {
		quitar = 205;
	} else if(tamaño >= 561 && tamaño <= 767) {
		quitar = 140;
	} else if(tamaño >= 768 && tamaño <= 992) {
		quitar = 125;
	} */

	$(".sidebar-menu li").removeClass("activo");
	$(this).parent().addClass("activo");
	var seccion = $(this).attr("href");

	console.log("Valor de eso = " + $(seccion).offset().top);
	console.log("Resta = " + ($(seccion).offset().top - quitar));

	$("body, html").animate({
		scrollTop: $(seccion).offset().top - quitar
	}, 1000);
}
$(function() {

	$(".sidebar-menu li a").on("click", irA);
});


function irA(event) {
	event.preventDefault();
	var tamaño = $(window).width();
	var quitar = 125;
	if(tamaño <= 389) {
		quitar = 230;
	} else if(tamaño >= 390 && tamaño <= 560) {
		quitar = 205;
	} else if(tamaño >= 561 && tamaño <= 767) {
		quitar = 155;
	}

	$(".sidebar-menu li").removeClass("activo");
	$(this).parent().addClass("activo");
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top - quitar
	}, 1000);
}
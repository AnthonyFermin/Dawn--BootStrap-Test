var main = function(){
	$('.dawn').click(function(){
		$('.menu').animate({left: 0px},200);
		$('body').animate({left: 285px},200);
	});
};

$(document).ready(main);
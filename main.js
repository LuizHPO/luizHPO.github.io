
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage'], paddingBottom: '20px',navigation: true, menu: '.footer'
	});
});

// TEXT INICIAL
var typed = new Typed('.text', {
  strings: ["Olá!<br>^800\nSeja bem vindo.<br>^800\nEu sou o Luiz."],
  typeSpeed: 60, startDelay: 1000, showCursor: false
});

$('.portfolio-img img, figcaption').on('mouseenter', function(){
	$('.portfolio-img img').addClass('ativo')
	$('figcaption').addClass('ativo');
	$('.portfolio-img img, figcaption').on('mouseleave', function(){
		$('figcaption').removeClass('ativo');
		$('.portfolio-img img').removeClass('ativo');
	});
});


//FULLPAGE
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage'], paddingBottom: '30px',navigation: true, menu: '.header'
	});
});

//Typed
var typed = new Typed('.text-typed', {
  strings: ["Olá!<br>^800\nSeja bem vindo.<br>^800\nEu sou o Luiz."],
  typeSpeed: 60, startDelay: 1000, showCursor: false
});

//Portfolio

var tela = $(window).width();

function portfolio() {

   if (tela > 739) {
    
  $('.portfolio img, .portfolio-img figcaption').on('mouseenter', function(){
  $('.portfolio-img figcaption').addClass('ativo');
  $('.portfolio img').addClass('ativo');
  $(this).on('mouseleave', function(){
    $('.portfolio-img figcaption, .portfolio img').removeClass('ativo');
  });
});
    
} 
  
}

portfolio();
                    

  


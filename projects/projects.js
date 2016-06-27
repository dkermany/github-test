$(document).ready(function(){

	$('.header-text').hover(function(){
		$(this).stop().animate({color: '#45ADF5'}, 100);
	}, function(){
		if($(this).text()!="Projects"){
			$(this).stop().animate({color: '#FFF'}, 100);
		}
	});

	$('#contact-img').hover(function(){
		$(this).stop().animate({fontSize: '1.45em'}, 100);
		$(this).stop().animate({fontSize: '1.30em'}, 100);
	}, function(){
		$(this).stop().animate({fontSize: '1em'}, 50);	
	});

	$('#name').hover(function(){
		$(this).stop().animate({backgroundColor: '#449AD0'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: '#3479a5'}, 100);		
	});

	$('#gamecalc').hover(function(){
		$(this).stop().animate({backgroundColor: 'rgba(100,100,100,0.3)'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: 'rgba(233,233,233,0.3)'}, 100);
	});

	$('#watchpoint').hover(function(){
		$(this).stop().animate({backgroundColor: 'rgba(17, 214, 239, 0.3)'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: 'rgba(233,233,233,0.3)'}, 100);
	});

	$('#blackhole').hover(function(){
		$(this).stop().animate({backgroundColor: 'rgba(74, 0, 0, 0.227451)'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: 'rgba(233,233,233,0.3)'}, 100);
	});

	$('#amino').hover(function(){
		$(this).stop().animate({backgroundColor: 'rgba(100,100,100,0.3)'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: 'rgba(233,233,233,0.3)'}, 100);
	});

	$('#higgs').hover(function(){
		$(this).stop().animate({backgroundColor: 'rgba(8, 40, 113, 0.11)'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: 'rgba(233,233,233,0.3)'}, 100);
	});

	$('.social-media a').hover(function(){
		$(this).stop().animate({color: '#45ADF5'}, 100);
	}, function(){
		$(this).stop().animate({color: '#58595b'}, 100);
	});
});
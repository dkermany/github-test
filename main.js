
$(document).ready(function(){
	window.scrollTo(0, 0);
	function preLoader() {
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		THREEx.WindowResize(renderer, camera);

		var geometry = new THREE.IcosahedronGeometry( 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true} );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.y = 0.1;
		scene.add( cube );

		camera.position.z = 3;
		camera.position.y = 0;

		var rotateX = Math.pow(-1, parseInt(Math.random()*2,10))*(0.01*Math.random()+0.005);
		var rotateY = Math.pow(-1, parseInt(Math.random()*2,10))*(0.01*Math.random()+0.005);

		//3d text
		var text = 'Daniel Kermany';
		var parameters = {
			size: 0.17,
			height: 0,
			curveSegments: 12,
			font: 'optimer',
			weight: 'bold',
			style: 'normal',
			bevelEnabled: false
		};
		var textGeometry = new THREE.TextGeometry(text, parameters);
		var textMaterial = new THREE.MeshBasicMaterial({color: 0x52A0DC, wireframe: false, transparent: true});
		var text = new THREE.Mesh(textGeometry, textMaterial);

		text.position.x = -0.82;
		text.position.y = 0;
		text.position.z = 0;
		scene.add(text);

		var requestAnim;

		var render = function () {
			requestAnim = requestAnimationFrame( render );

			cube.rotation.x += rotateX;
			cube.rotation.y += rotateY;

			setTimeout(
			  function() {
			  	if(material.opacity > 0 || textMaterial.opacity > 0) {
					material.opacity -= 0.025;
					textMaterial.opacity -= 0.025;
				}
				else {
					$('canvas').remove();
					$('.jumbotron').animate({
						'opacity': '1'
					}, 800);
					cancelAnimationFrame( requestAnim );
				}
			  }, 1500);
			
			renderer.render(scene, camera);
		};

		render();
	}

	preLoader();

	$(window).resize(function(){
		if($(window).width() > 757)
			$('#stories .round-image').css('margin-top', '65%');
		else
			$('#stories .round-image').css('margin-top', '150px');
	});

	$('.header-text').hover(function(){
		$(this).stop().animate({color: '#45ADF5'}, 100);
	}, function(){
		if($(this).text()!='Home'){
			$(this).stop().animate({color: '#FFF'}, 100);
		}
	});

	$('#contact-img').hover(function(){
		$(this).filter(':not(:animated)').stop().animate({fontSize: '1.45em'}, 100);
		$(this).animate({fontSize: '1.25em'}, 100);
	}, function(){
		$(this).stop().animate({fontSize: '1em'}, 50);	
	});

	$('#name').hover(function(){
		$(this).stop().animate({backgroundColor: '#449AD0'}, 100);
	}, function(){
		$(this).stop().animate({backgroundColor: '#3479a5'}, 100);		
	});

	$('#contact').hover(function(){
		$(this).stop().animate({backgroundColor: '#45ADF5', color: '#F4F4F4'}, 200);
	}, function(){
		$(this).stop().animate({backgroundColor: '#F4F4F4', color: '#45ADF5'}, 200);
	});

	$('#credentials a').hover(function(){
		$(this).stop().animate({color: '#45ADF5'}, 100);
	}, function(){
		$(this).stop().animate({color: '#AAA'}, 100);
	});

	$('#social-media a').hover(function(){
		$(this).stop().animate({color: '#45ADF5'}, 100);
	}, function(){
		$(this).stop().animate({color: '#58595b'}, 100);
	});

	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

		$('#story1').hover(function(){
			if($(window).width() > 1740)
				$('#story1 .story-text').stop().animate({opacity: 1.0, top: '500px'}, 1000, 'easeOutExpo');
			else
				$('#story1 .story-text').stop().animate({opacity: 1.0, top: '400px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story1 .round-image').stop().animate({'margin-top': '50%'}, 1000, 'easeOutExpo');
			else 
				$('#story1 .round-image').stop().animate({'margin-top': '100px'}, 1000, 'easeOutExpo');
		}, function(){
			if($(window).width() > 1740)
				$('#story1 .story-text').stop().animate({opacity: 0, top: '540px'}, 1000, 'easeOutExpo');
			else
				$('#story1 .story-text').stop().animate({opacity: 0, top: '440px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story1 .round-image').stop().animate({'margin-top': '65%'}, 1000, 'easeOutExpo');
			else 
				$('#story1 .round-image').stop().animate({'margin-top': '150px'}, 1000, 'easeOutExpo');
		});

		$('#story1 .hidden-stuff').click(function(){
			if($('#story1 .hidden-stuff').css('opacity') < 0.2){
				$('.hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
				$('#story1 .hidden-stuff').stop().animate({opacity: 1.0}, 1000, 'easeOutExpo');
			}
			else
				$('#story1 .hidden-stuff').animate({opacity: 0}, 1000, 'easeOutExpo');
		});

		$('#story2').hover(function(){
			if($(window).width() > 1740)
				$('#story2 .story-text').stop().animate({opacity: 1.0, top: '500px'}, 1000, 'easeOutExpo');
			else
				$('#story2 .story-text').stop().animate({opacity: 1.0, top: '400px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story2 .round-image').stop().animate({'margin-top': '50%'}, 1000, 'easeOutExpo');
			else 
				$('#story2 .round-image').stop().animate({'margin-top': '100px'}, 1000, 'easeOutExpo');
		}, function(){
			if($(window).width() > 1740)
				$('#story2 .story-text').stop().animate({opacity: 0, top: '540px'}, 1000, 'easeOutExpo');
			else
				$('#story2 .story-text').stop().animate({opacity: 0, top: '440px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story2 .round-image').stop().animate({'margin-top': '65%'}, 1000, 'easeOutExpo');
			else 
				$('#story2 .round-image').stop().animate({'margin-top': '150px'}, 1000, 'easeOutExpo');
		});

		$('#story2 .hidden-stuff').click(function(){
			if($('#story2 .hidden-stuff').css('opacity') < 0.2){
				$('.hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
				$('#story2 .hidden-stuff').stop().animate({opacity: 1.0}, 1000, 'easeOutExpo');
			}
			else
				$('#story2 .hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
		});

		$('#story3').hover(function(){
			if($(window).width() > 1740)
				$('#story3 .story-text').stop().animate({opacity: 1.0, top: '500px'}, 1000, 'easeOutExpo');
			else
				$('#story3 .story-text').stop().animate({opacity: 1.0, top: '400px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story3 .round-image').stop().animate({'margin-top': '50%'}, 1000, 'easeOutExpo');
			else 
				$('#story3 .round-image').stop().animate({'margin-top': '100px'}, 1000, 'easeOutExpo');
		}, function(){
			if($(window).width() > 1740)
				$('#story3 .story-text').stop().animate({opacity: 0, top: '540px'}, 1000, 'easeOutExpo');
			else
				$('#story3 .story-text').stop().animate({opacity: 0, top: '440px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story3 .round-image').stop().animate({'margin-top': '65%'}, 1000, 'easeOutExpo');
			else 
				$('#story3 .round-image').stop().animate({'margin-top': '150px'}, 1000, 'easeOutExpo');
		});

		$('#story3 .hidden-stuff').click(function(){
			if($('#story3 .hidden-stuff').css('opacity') < 0.2){
				$('.hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
				$('#story3 .hidden-stuff').stop().animate({opacity: 1.0}, 1000, 'easeOutExpo');
			}
			else
				$('#story3 .hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
		});

		$('#story4').hover(function(){
			if($(window).width() > 1740)
				$('#story4 .story-text').stop().animate({opacity: 1.0, top: '500px'}, 1000, 'easeOutExpo');
			else
				$('#story4 .story-text').stop().animate({opacity: 1.0, top: '400px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story4 .round-image').stop().animate({'margin-top': '50%'}, 1000, 'easeOutExpo');
			else 
				$('#story4 .round-image').stop().animate({'margin-top': '100px'}, 1000, 'easeOutExpo');
		}, function(){
			if($(window).width() > 1740)
				$('#story4 .story-text').stop().animate({opacity: 0, top: '540px'}, 1000, 'easeOutExpo');
			else
				$('#story4 .story-text').stop().animate({opacity: 0, top: '440px'}, 1000, 'easeOutExpo');
			if($(window).width() > 757)
				$('#story4 .round-image').stop().animate({'margin-top': '65%'}, 1000, 'easeOutExpo');
			else 
				$('#story4 .round-image').stop().animate({'margin-top': '150px'}, 1000, 'easeOutExpo');
		});

		$('#story4 .hidden-stuff').click(function(){
			if($('#story4 .hidden-stuff').css('opacity') < 0.2){
				$('.hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
				$('#story4 .hidden-stuff').stop().animate({opacity: 1.0}, 1000, 'easeOutExpo');
			}
			else
				$('#story4 .hidden-stuff').stop().animate({opacity: 0}, 1000, 'easeOutExpo');
		});

	}
	else{
		$('#stories .story-text').css({'opacity': '1.0', 'top': '400px'});
		$('#stories .round-image').css('margin-top', '100px');
		$('#story1::after').css('opacity', '1.0');
		$('#story2::after').css('opacity', '1.0');
		$('#story3::after').css('opacity', '1.0');
		$('#story4::after').css('opacity', '1.0');
	}
	
});
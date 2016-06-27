$(document).ready(function(){

	var errorMessage = $('#form-messages');
	var name = $('#name-input');
	var email = $('#email-input');
	var math = $('#math-input');
	var message = $('#message-input');

	$('.header-text').hover(function(){
		$(this).animate({color: '#45ADF5'}, {duration: 100, queue: false});
	}, function(){
		if($(this).text()!="Home"){
			$(this).animate({color: '#FFF'}, 100);
		}
	});

	$('#contact-img').hover(function(){
		$(this).filter(':not(:animated)').animate({fontSize: '1.45em'}, 100);
		$(this).animate({fontSize: '1.30em'}, 100);
	}, function(){
		$(this).animate({fontSize: '1em'}, 50);	
	});

	$('#name').hover(function(){
		$(this).animate({backgroundColor: '#449AD0'}, {duration: 100, queue: false});
	}, function(){
		$(this).animate({backgroundColor: '#3479a5'}, 100);		
	});

	$('#submit').hover(function(){
		$(this).animate({backgroundColor: '#5CC8ED'}, {duration: 100, queue: false});
	}, function(){
		$(this).animate({backgroundColor: '#4da8c7'}, 100);		
	});

	$('#social-media a').hover(function(){
		$(this).animate({color: '#45ADF5'}, {duration: 100, queue: false});
	}, function(){
		$(this).animate({color: '#58595b'}, 100);
	});

	$('#contact-form').submit(function(event){
		event.preventDefault();
	    $(this).ajaxSubmit({
            type:"POST",
            data: $(this).serialize(),
            url:"mailer.php",
            beforeSubmit: function(arr, form, options){
            	for(var x=0;x<arr.length;x++){
            	var input = arr[x].value;
            	var field = arr[x].name
        		switch(x){
        			case 0:
        				if(input.length<2){
        					submitError(field);
        					return false;
        				}
        				break;
        			case 1:
        				if(!validateEmail(input)){
        					submitError(field);
        					return false;
        				}
        				break;
        			case 2:
        				if(Number(input)!==parseInt(input, 10)||parseInt(input, 10)!==42){
        					submitError(field);
        					return false;
        				}
        			case 3:
        				if(input.length<2){
        					submitError(field);
        					return false;
        				}
            		}
            	}
            	return true;
            },
            success: function() {
            	$(errorMessage).removeClass();	//no parameter - removes all classes
				$(name).removeClass();
				$(email).removeClass();
				$(math).removeClass();
				$(message).removeClass();
				$(errorMessage).addClass('success');
				$('#contact-form').trigger('reset');
            },
            error: submitError('bad request')
        });
	});

	function submitError(field){
		$(errorMessage).removeClass();	//no parameter - removes all classes
		$(name).removeClass();
		$(email).removeClass();
		$(math).removeClass();
		$(message).removeClass();
		switch(field){
			case 'name':
				$(errorMessage).addClass('name-error');
				$(name).addClass('error');
				break;
			case 'email':
				$(errorMessage).addClass('email-error');
				$(email).addClass('error');
				break;
			case 'math':
				$(errorMessage).addClass('math-error');
				$(math).addClass('error');
				break;
			case 'message':
				$(errorMessage).addClass('message-error');
				$(message).addClass('error');
				break;
			case 'bad request':
				$(errorMessage).addClass('mystery-error');
				break;

		}
		window.scrollTo(0,0);
	}

	function validateEmail(email){
		var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])");
		return re.test(email);
	}
});
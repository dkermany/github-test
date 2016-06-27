$(document).ready(function(){
	var openGUI = false;
	$("#close-button").click(function(){
		if(openGUI){
			$("div.body").css("display", "none");
			$("div#close-button").css({"top": "0", "bottom": "initial"});
			$("#close-text").text("Open Notes"); 
			openGUI = false;        
		}
		else{
			$("div.body").css("display", "initial");
			$("div#close-button").css({"top": "initial", "bottom": "0"});
			$("#close-text").text("Close Notes"); 
			openGUI = true;
		}
	});
	
});
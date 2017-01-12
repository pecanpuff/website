/**
 * Created by sabri_000 on 1/10/2017.
 */
var main = function() {

	$('#image-url').keyup(function(){
		var url =$(this).val();
		$('.thumbnail img').attr('src',url);
	});


	$('#top-text').keyup(function(){
		var top =$(this).val();
		$('.top-caption').text(top);
	});

	$('#bottom-text').keyup(function(){
		var bottom =$(this).val();
		$('.bottom-caption').text(bottom);
	});
};



$(document).ready(main);
//for the thumnail img
//<img src="https://s3.amazonaws.com/codecademy-content/projects/2/bonsai/cat.jpg">
//for the logo
//<img src="https://s3.amazonaws.com/codecademy-content/projects/2/bonsai/logo.svg">


//for url testing img
//http://www.petwebsite.com/hamsters/hamster-images/hamster-escape.jpg
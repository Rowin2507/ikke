//SLIDE MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//LOADING SCREEN
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 500);
});

//ACCOUNT AANMAKEN EXPANDING DIV
$(".account_aanmaken").click(function () {

    $account_aanmaken = $(this);
    //getting the next element
    $account_form = $account_aanmaken.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $account_form.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $account_aanmaken.text(function () {
            //change text based on condition
            return $account_form.is(":visible") ? "Annuleren" : "Account aanmaken";
        });
    });
});

//FOOTER JAARTAL
var mijnDiv = document.getElementById("copyright");
var datum = new Date();
mijnDiv.innerHTML = "© Rowin Schmidt " + " | " + datum.getFullYear() + " | MediaCollege";

//SCROLLTOTOP
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

//PASSWORD CHECK
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Wachtwoorden komen niet overeen");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

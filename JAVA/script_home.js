//SLIDE MENU
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//FOOTER JAARTAL
var mijnDiv = document.getElementById("copyright");
var datum = new Date();
mijnDiv.innerHTML = "© Rowin Schmidt " + " | " + datum.getFullYear() + " | MediaCollege";

//LOADING SCREEN
$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
});

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

//COLLAGE (HOME PAGINA)
var thumbnails = document.getElementById("thumbnails");
var imageHolder = document.getElementById("imageHolder");
var imageNames = ["IMAG0444.jpg",
  "IMAG0445.jpg",
  "IMAG0446.jpg",
  "IMAG0447.jpg",
  "IMAG0448.jpg",
  "IMAG0449.jpg",
  "IMAG0450.jpg",
  "IMAG0451.jpg",
  "IMAG0452.jpg",
  "IMAG0453.jpg",
  "IMAG0455.jpg",
  "IMAG0456.jpg",
  "IMAG0457.jpg",
  "IMAG0458.jpg",
  "IMAG0459.jpg",
  "IMAG0460.jpg",
  "IMAG0461.jpg",
  "IMAG0462.jpg",
  "IMAG0463.jpg",
  "IMAG0464.jpg",
  "IMAG0465.jpg",
  "IMAG0466.jpg",
  "IMAG0467.jpg",
  "IMAG0468.jpg",
  "IMAG0469.jpg",
  "IMAG0470.jpg",
  "IMAG0471.jpg"];

imageHolder.src = "collage/" + imageNames[0];

for(let i=0;i<imageNames.length;i++){
  let img = document.createElement('img');
  let src = document.createAttribute('src');
  src.value = "collage/" + imageNames[i];
  img.setAttributeNode(src);
  thumbnails.appendChild(img);
  img.addEventListener('click',()=>{
    imageHolder.src = "collage/" + imageNames[i];
  })
}

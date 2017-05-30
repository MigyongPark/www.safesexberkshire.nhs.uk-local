// Locks nav to top on scroll
$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
});

// Smooth scroll (added for personalised content on home page)
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 600);
        return false;
      }
    }
  });
});
$(function(){
	$('.TimeToTest').hide();
	$('.TestHiv').hide();
	//$('#WbrY').click(function(){
		//$('.TestHiv').slideUp();
		//$('.TimeToTest').slideDown();
		// console.log('Yes');
	//});
	$('#WbrN').click(function(){
		//$('.TimeToTest').slideUp();
		$('.TestHiv').slideDown();
		// console.log('NO');
	});
});
// Data table plugin - used in service & pharmacy results
$(document).ready(function() {
    $('#resultsTbl').DataTable( {
			responsive: true,
		    bInfo : false,
			paging: false,
			"language": {
		    "search": "Filter results:"
		  }
		} );
});


// Date picker used in Chlamydia testing form
$(function() {
  $( "#datepicker" ).datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true,
  changeYear: true,yearRange: "-100:+0", defaultDate: '-20y', });
});

//code that made the paenls hide/show in subpages
// $(function(){
//   $(".panelIsNotInHome").slideToggle(0);
//     $(".heading").on("click", function(){
//         $(".panelIsNotInHome")
//         .slideToggle(600);
//         /*.parent().next().slideToggle();*/
//     });
// });


$(function() {
  // $( "h2:first" ).addClass( "m-t-0" );
});



// these are used for the temporary banner (nov 2016)
$('.search-sml').click(function(event){
    event.stopPropagation();
});

$('.nhsLogoLink').click(function(event){
    event.stopPropagation();
});

$(".main-title-temp").hover(function() {
    $(this).css('cursor','pointer');
}, function() {
    $(this).css('cursor','auto');
});

$('.main-title-temp').click(function(){
	window.location.href='https://www.safesexberkshire.nhs.uk/sexual-health-matters/order-hiv-test-kit/';
});


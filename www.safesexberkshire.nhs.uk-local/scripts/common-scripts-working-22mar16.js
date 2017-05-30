$(".Filtered").addClass('hidePanel');		//hide all the filered content panels on home page
var numOfDefaults = $(".Default").length;
$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});

$('.quest-list a' ).click(function() {
	// alert( "There are " + numOfDefaults + " default panels.");
	$(".contentPromoPanel").removeClass('hidePanel').addClass('hidePanel');		//hide all the filered content panels on home page
	// alert("All .contentPromoPanel items have hidePanel removed & added again");
	// $(".Default").removeClass('hidePanel').addClass('hidePanel');		//hide all the filered content panels on home page
	// alert("All .Default items have hidePanel removed & added again");
	var resfilterText = $(this).data("filterText");			//get the filter text for the link that was clicked
	//alert("resfilterText is: " + resfilterText + " : " + typeof "resfilterText");
	// $('.Filtered:contains("' + resfilterText + '")').removeClass('hidePanel');
	// $(".contentPromoPanels li[dataFilterText*='" + resfilterText + "']").removeClass('hidePanel');
	$('.grid-item[data-associations*="' + resfilterText + '"]').removeClass('hidePanel');
	// alert("All the selected .Filtered items have hidePanel removed");
	// var numOfAssocPanels = $('li[data-associations*="' + resfilterText + '"]').length;
	// alert( "There are " + numOfAssocPanels + " associated panels.");
	// var panelLimiter = numOfDefaults - numOfAssocPanels;
	// alert( "panelLimiter is " + panelLimiter);
	// $('.Default:lt("' + panelLimiter + '")').toggleClass('hidePanel');
});

// $('.location').click(function() {
//   $( "#frmPcode" ).submit();
// });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function() {
    $('#resultsTbl').DataTable( {
			responsive: true,
			paging: false,
			"language": {
		    "search": "Filter results:"
		  }
		} );
} );


$(document).ready(function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});

	// filter .metal items that are NOT .transition
	$grid.isotope({ filter: '.metal:not(.transition)' });

		// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
} );

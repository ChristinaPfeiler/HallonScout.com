//Document ready
//add this function to make sure your page has completely loaded, before any js/jquery runs

$(document).ready( function () {

//Slick carousel slider Startpage
$(".slider").slick();

//Micropage carousel slider

$('.slider-responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Isotope Sorting

  // Initialise isotope
  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layout: 'masonry'
  });

  // Create variables to hold...

  // Output (the combined filter values)
  var $output = $('#output');
  // Select box class
  var $selects = $('.filters-select');
  // Outer container class
  var $container = $('.grid');

  // Whenever a select box changes
  $selects.change( function() {
    // map selected values to an array
    var inclusives = [];

    // get filter value from selected values
    var filterValue = this.value;

    // for each selected value, map values to i & product
    $selects.each( function( i, product ) {
        // Add all product.values to the inclusives array
        inclusives.push( product.value );
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join('') : '*';

    // filter with  isotope
    $container.isotope({ filter: filterValue })
  });


}); //End of document - ready

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:24,
  nav:false,
  dotsEach: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
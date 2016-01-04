$(document).ready(function(){
  $('.slick-banner').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  $('.say-me').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    adaptiveHeight: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  // on page load...
  moveProgressBar();
  // on browser resize...
  $(window).resize(function() {
      moveProgressBar();
  });

  // SIGNATURE PROGRESS
  function moveProgressBar() {
    console.log("moveProgressBar");
    var progresswaps = $('.progress-wrap');
    $.each(progresswaps, function(i){
      var progressItem = $(progresswaps[i]);
      var getPercent = ($(progressItem).data('progress-percent') / 100);
      var getProgressWrapWidth = $(progressItem).width();
      var progressTotal = getPercent * getProgressWrapWidth;
      var animationLength = 2500;
      // on page load, animate percentage bar to data percentage length
      // .stop() used to prevent animation queueing
      $(progressItem).find('.progress-bar').stop().animate({
          left: progressTotal
      }, animationLength);
    });
  }

  // init grid portfolio
  var filterList = {
    
    init: function () {
    
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixitup({
        targetSelector: '.portfolio',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap',
        // call the hover effect
        onMixEnd: filterList.hoverEffect()
      });       
    
    },
    
    hoverEffect: function () {
    
      // Simple parallax effect
      $('#portfoliolist .portfolio').hover(
        function () {
          $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
          $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
        },
        function () {
          $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
          $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
        }   
      );        
    
    }

  };
  
  // Run the show!
  filterList.init();
    
}); 

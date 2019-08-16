$(window).scroll(function(e){ 
    var $el = $('.call-us-row'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px', 'left': '15px', 'width': '100%'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px', 'width': 'auto'}); 
    } 
  });

  $(document).ready(function() {
    $('.services-link').click(function(e) {
      e.preventDefault();
  
      $('html, body').animate({
        scrollTop: $('.explore-text').offset().top
      }, 500);
    });
  });
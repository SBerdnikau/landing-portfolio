
$(document).ready(function () {

  //Skills

  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent+'%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }

  });

  //Carousel

  $('.carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText: [],
    items: 5,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      768:{
        items:3
      },
      980:{
        items:5
      }
    }
  })


});
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//               }
            
//         ]
//     });
//   });

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      768: {
        nav: false
      }
    }
    // navPosition: 'bottom'    
    // controlsText: [  это кнопки переключения слайдера, но их сложно стилизовать посередине картинок, поэтому добавим их вруxную через html
    //     '<img class="left-arrow" src="icons/left-solid.png">',
    //     '<img class="right-arrow" src="icons/right-solid.png">'
    // ]
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  
$(document).ready(function(){
    $("#calculationConnectionTel").mask("+7(999)999-99-99")
})

var sliderSelector = '.swiper-container',
options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 60,
        modifier: 1,
        slideShadows : true,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: -80
        }        
        }
};
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

(function($){
    $(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
        layout:"auto"
        });
        $.mPageScroll2id({
            offset:200
        });
    });
  })(jQuery);

  var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);
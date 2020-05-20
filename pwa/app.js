var swiper = new Swiper({
    el: '.home-slider-cont',
    initialSlide: 1,
    spaceBetween: 0,
    slidesPerView: 1.3,
    centeredSlides: true,
    slideToClickedSlide: false,
    mousewheel: {
      enabled: false,
    },
    keyboard: {
      enabled: false,
    },
    loop: false
});

var css = ".swiper-slide-active .next-btn-slide  { transform: translate("+Math.floor($(".swiper-slide").width()*.65).toString()+"px, -"+($(".next-btn-slide").width()*.5).toString()+"px) scale(1); } .next-btn-slide  { height: "+$(".next-btn-slide").width().toString()+"px; transform: translate("+Math.floor($(".swiper-slide").width()*.65-$(".swiper-slide").width()*.075).toString()+"px, -"+Math.floor($(".swiper-slide").height()*.075+$(".next-btn-slide").width()*.5).toString()+"px) scale(0); }",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
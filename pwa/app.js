var swiper = new Swiper({
    el: '.home-slider-cont',
    initialSlide: 1,
    spaceBetween: 0,
    slidesPerView: 1.5,
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

var css = ".swiper-slide-active .next-btn-slide  { transform: translate("+Math.floor(document.getElementsByClassName("swiper-slide")[0].style.width.slice(0, -2)*.65).toString()+"px, -35px) scale(1); } .next-btn-slide  { transform: translate("+Math.floor($(".swiper-slide").width()*.65).toString()+"px, -"+Math.floor($(".swiper-slide").height()*.075+35).toString()+"px) scale(0); }",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
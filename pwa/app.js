var swiper = new Swiper({
    el: '.home-slider-cont',
    initialSlide: 1,
    spaceBetween: 0,
    slidesPerView: 1.35,
    centeredSlides: true,
    slideToClickedSlide: true,
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

const rippleeffects = Array.from(document.querySelectorAll(".ripple-effect"));
rippleeffects.forEach((rippleeffect) => {
  let timerId;
  rippleeffect.addEventListener("mousedown", (e) => {
    clearTimeout(timerId);
    const ripple = e.target.querySelector(".ripple");
    const size = rippleeffect.offsetWidth;
    const pos = rippleeffect.getBoundingClientRect();
    const x = e.pageX - pos.left - size;
    const y = e.pageY - pos.top - size;
    ripple.style =
      "top:" +
      y +
      "px; left:" +
      x +
      "px; width: " +
      size * 2 +
      "px; height: " +
      size * 2 +
      "px;";
    ripple.classList.remove("active");
    ripple.classList.remove("start");
    setTimeout(() => {
      ripple.classList.add("start");
      setTimeout(() => {
        ripple.classList.add("active");
      });
    });
  });
  rippleeffect.addEventListener("mouseup", (e) => {
    const ripple = e.target.querySelector(".ripple");
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      ripple.classList.remove("active");
      ripple.classList.remove("start");
    }, 500);
  });
});

const slide_btns = Array.from(document.querySelectorAll(".home-slider-cont .btn"));
slide_btns.forEach((slide_btn) => {
  slide_btn.onmousedown = function() {
    console.log(this.parentElement == document.querySelectorAll(".home-slider-cont .swiper-slide")[swiper.activeIndex]);
    if (this.classList.contains('btn-active')) { this.classList.remove('btn-active'); setTimeout(() => { this.classList.add('btn-active'); setTimeout(() => { this.classList.remove('btn-active'); }, 300); }, 10); } else { this.classList.add('btn-active'); setTimeout(() => { this.classList.remove('btn-active'); }, 300); }
  }
});
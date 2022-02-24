// INIT AOS
AOS.init({ once: true });
$(document).ready(function () {
  // ADD FIXED CLASS TO HEADER ON SCROLL
  $(function () {
    var header = $(".navbar");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 300) {
        header.addClass("nav-fixed");
      } else {
        header.removeClass("nav-fixed");
      }
    });
  });

  // MATCHHEIGHT WHY US CONTENT
  $(function () {
    $(".why-us-item p").matchHeight();
  });

  // SWIPER TESTIMONIAL
  const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    cssMode: true,
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

  $("[href^='#']").click(function () {
    id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      800
    );
  });
});

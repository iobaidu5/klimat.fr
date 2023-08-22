$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector(".Navbar");
  window.addEventListener("scroll", fixNav);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
     nav.removeAttribute('clip-path');
    } else {
      nav.classList.remove("navbar-active");
    }
  }
  
  var owl = $("#owl");
  owl.owlCarousel({
    items: 5,
    navigation: false,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fal fa-caret-left owlNav'></i>",
      "<i class='fal fa-caret-right owlNav'></i>",
    ],
    responsiveClass: true,
    responsive: {
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 4,
        nav: false,
      },
      1600: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });


  var owl = $("#owl2");
  owl.owlCarousel({
    items: 3,
    navigation: true,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fas fa-chevron-left owlNav-left'></i>",
      "<i class='fas fa-chevron-right owlNav-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: false,
      },
      1600: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
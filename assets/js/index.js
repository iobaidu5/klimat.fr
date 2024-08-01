$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });

  // Function to add title attribute to all <a> tags
function addTitleToLinks() {
  // Get all <a> elements on the page
  var links = document.querySelectorAll('a');

  // Loop through each <a> element
  links.forEach(function(link) {
      // Get the inner text of the <a> element
      var linkText = link.textContent;

      // Set the title attribute to the inner text
      link.setAttribute('title', linkText);
  });
}

// Call the function
addTitleToLinks();



document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.querySelector('.play-button');
  const video = document.querySelector('.background-video');
  const fullScreenBackdrop = document.querySelector('.full-screen-backdrop');
  const videoPopup = document.querySelector('.video-popup');
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  const closeButton = document.querySelector('.close-button');
  const toHide = document.querySelector('.vid-to-hide');

  playButton.addEventListener('click', function() {
    videoPopup.style.display = 'block';
    fullScreenBackdrop.style.display = 'block';
    playButton.style.display = 'none';
    title.style.display = 'block';
    description.style.display = 'block';
    closeButton.style.display = 'block';
    //toHide.style.display = "none"
    video.play();
  });

  closeButton.addEventListener('click', function() {
    video.pause();
    videoPopup.style.display = 'none';
    fullScreenBackdrop.style.display = 'none';
    playButton.style.display = 'block';
    title.style.display = 'none';
    description.style.display = 'none';
    closeButton.style.display = 'none';
    //toHide.style.display = 'block';
  });

  video.addEventListener('pause', function() {
    videoPopup.style.display = 'none';
    fullScreenBackdrop.style.display = 'none';
    playButton.style.display = 'block';
    title.style.display = 'none';
    description.style.display = 'none';
    closeButton.style.display = 'none';
  });

  video.addEventListener('ended', function() {
    videoPopup.style.display = 'none';
    fullScreenBackdrop.style.display = 'none';
    playButton.style.display = 'block';
    title.style.display = 'none';
    description.style.display = 'none';
    closeButton.style.display = 'none';
    //toHide.style.display = 'block';
  });
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
  
  $(document).ready(function() {
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
      nav: false,
      responsiveClass: true,
      responsive: {
        100: {
          items: 1,
          nav: true,
        },
        400: {
          items: 1,
          nav: true,
        },
        768: {
          items: 3,
          nav: true,
        },
        1200: {
          items: 3,
          nav: false,
        },
        1600: {
          items: 5,
          nav: true,
          loop: false,
        },
      },
      onInitialized: addZoomClass,
      onTranslated: addZoomClass,
    });

    function addZoomClass(event) {
      var items = event.item.count; // Total items
      var item = event.item.index; // Current item index
      var middleItemIndex = item + Math.floor(event.page.size / 2);

      // Remove the class from all items
      $('.owl-item').removeClass('center');

      // Add the class to the center item
      $('.owl-item').eq(middleItemIndex).addClass('center');
    }

    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [5000]);
    });

    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
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
      100: {
        items: 1,
        nav: true,
      },
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


  $(document).ready(function(){
    $("#owl4").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  });



  const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");


$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
  }, {

      //chnage count up speed here
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

$("#particulier").show()
$("#professionnel").hide()
$("#professional-header").hide()
$("#particulier-btn").css("background-color", "#F69428");

$(document).ready(function () {
  $("#particulier").show()
  $("#professionnel").hide()
  $("#professional-header").hide()
  
  $("#particulier-btn").click(function(){
    $("#particulier").show("slow")
    $("#professional").hide("slow")
    $("#professional-header").hide("slow")
    $("#particulier-header").show("slow")
    $("#particulier-btn").css("background-color", "#F69428");
    $("#professionnel-btn").css("background-color", "#6EA1D9");
  });
  
  $("#professionnel-btn").click(function(){
    $("#particulier").hide("slow")
    $("#professional").show("slow")
    $("#professional-header").show("slow")
    $("#particulier-header").hide("slow")
    $("#professionnel-btn").css("background-color", "#F69428");
    $("#particulier-btn").css("background-color", "#6EA1D9");
  });
});




const galleryItem = document.getElementsByClassName("gallery-item");
  const lightBoxContainer = document.createElement("div");
  const lightBoxContent = document.createElement("div");
  const lightBoxImg = document.createElement("img");
  const lightBoxPrev = document.createElement("div");
  const lightBoxNext = document.createElement("div");
  
  lightBoxContainer.classList.add("lightbox");
  lightBoxContent.classList.add("lightbox-content");
  lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
  lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");
  
  lightBoxContainer.appendChild(lightBoxContent);
  lightBoxContent.appendChild(lightBoxImg);
  lightBoxContent.appendChild(lightBoxPrev);
  lightBoxContent.appendChild(lightBoxNext);
  
  document.body.appendChild(lightBoxContainer);
  
  let index = 1;
  
  function showLightBox(n) {
      if (n > galleryItem.length) {
          index = 1;
      } else if (n < 1) {
          index = galleryItem.length;
      }
      let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
      lightBoxImg.setAttribute("src", imageLocation);
  }
  
  function currentImage() {
      lightBoxContainer.style.display = "block";
  
      let imageIndex = parseInt(this.getAttribute("data-index"));
      showLightBox(index = imageIndex);
  }
  for (let i = 0; i < galleryItem.length; i++) {
      galleryItem[i].addEventListener("click", currentImage);
  }
  
  function slideImage(n) {
      showLightBox(index += n);
  }
  function prevImage() {
      slideImage(-1);
  }
  function nextImage() {
      slideImage(1);
  }
  lightBoxPrev.addEventListener("click", prevImage);
  lightBoxNext.addEventListener("click", nextImage);
  
  function closeLightBox() {
      if (this === event.target) {
          lightBoxContainer.style.display = "none";
      }
  }
  lightBoxContainer.addEventListener("click", closeLightBox);

  
// YouTube Player API for header BG video

// Insert the <script> tag targeting the iframe API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Get the video ID passed to the data-video attribute
const bgVideoID = document.querySelector('.js-background-video').getAttribute('data-video');

// Set the player options
const playerOptions = {
  // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
  // Chrome/Safari/Mobile
  autoplay: 1,
  mute: 1,
  autohide: 1, 
  modestbranding: 1, 
  rel: 0, 
  showinfo: 0, 
  controls: 0, 
  disablekb: 1, 
  enablejsapi: 1, 
  iv_load_policy: 3,
  loop: 1,
  playlist: bgVideoID,
  
}


// Get the video overlay, to mask it when the video is loaded
const videoOverlay = document.querySelector('.js-video-overlay');

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let ytPlayer;
function onYouTubeIframeAPIReady() {
  // Set initial dimensions based on the viewport size
  const playerWidth = window.innerWidth; // Set width to 100%
  const playerHeight = window.innerHeight + 'vh'; // Set height to viewport height

  ytPlayer = new YT.Player('yt-player', {
    width: playerWidth,
    height: playerHeight,
    videoId: bgVideoID,
    playerVars: playerOptions,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  // Adjust player size when window is resized
  window.addEventListener('resize', function() {
    const newPlayerHeight = window.innerHeight + 'vh';
    ytPlayer.setSize(playerWidth, newPlayerHeight);
  });
}



// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();

  // Get the duration of the currently playing video
  const videoDuration = event.target.getDuration();
  
  // When the video is playing, compare the total duration
  // To the current passed time if it's below 2 and above 0,
  // Return to the first frame (0) of the video
  // This is needed to avoid the buffering at the end of the video
  // Which displays a black screen + the YouTube loader
  setInterval(function (){
    const videoCurrentTime = event.target.getCurrentTime();
    const timeDifference = videoDuration - videoCurrentTime;
    
    if (2 > timeDifference > 0) {
      event.target.seekTo(0);
    }
  }, 1000);
}

// When the player is ready and when the video starts playing
// The state changes to PLAYING and we can remove our overlay
// This is needed to mask the preloading
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    videoOverlay.classList.add('header__video-overlay--fadeOut');
  }
}



function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});

/*******************************************************************************************/

new WOW().init();

/*******************************************************************************************/

$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 23) {
    $(".navbar").addClass("navbar-fixed");
  }
  if ($(window).scrollTop() < 24) {
    $(".navbar").removeClass("navbar-fixed");
  }
});

/*******************************************************************************************/
// main
const tabs = document.querySelectorAll(".tabs_main");
const tabsContent = document.querySelectorAll(".tab_body_main");

if (tabsContent.length > 0 || tabs.length > 0) {
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove("active");
    });

    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("active");
    tabs[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
// first
const tabs_list = document.querySelectorAll(".tabs_inner");
const tabs_main = document.querySelectorAll(".tab_body_inner");

if (tabs_main.length > 0 || tabs_list.length > 0) {
  function hideTabContent() {
    tabs_main.forEach((item) => {
      item.classList.remove("active");
    });

    tabs_list.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabs_main[i].classList.add("active");
    tabs_list[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs_list.forEach((tabs_list, index) => {
    tabs_list.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
// second
const tabs_thr = document.querySelectorAll(".tabs_sec");
const tabs_clr = document.querySelectorAll(".tab_inner_sec");

if (tabs_clr.length > 0 || tabs_thr.length > 0) {
  function hideTabContent() {
    tabs_clr.forEach((item) => {
      item.classList.remove("active");
    });

    tabs_thr.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabs_clr[i].classList.add("active");
    tabs_thr[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs_thr.forEach((tabs_thr, index) => {
    tabs_thr.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
// Three
const tabs_wrap = document.querySelectorAll(".tabs_thr");
const tabs_wrp = document.querySelectorAll(".tab_inner_tr");

if (tabs_wrp.length > 0 || tabs_wrap.length > 0) {
  function hideTabContent() {
    tabs_wrp.forEach((item) => {
      item.classList.remove("active");
    });

    tabs_wrap.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabs_wrp[i].classList.add("active");
    tabs_wrap[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs_wrap.forEach((tabs_wrap, index) => {
    tabs_wrap.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
// Four
const tabs_for = document.querySelectorAll(".tabs_fou");
const tabs_lin = document.querySelectorAll(".tab_inner_fr");

if (tabs_lin.length > 0 || tabs_for.length > 0) {
  function hideTabContent() {
    tabs_lin.forEach((item) => {
      item.classList.remove("active");
    });

    tabs_for.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    tabs_lin[i].classList.add("active");
    tabs_for[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs_for.forEach((tabs_for, index) => {
    tabs_for.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
// Table
const tabs_table = document.querySelectorAll(".tabs_table");
const table_list = document.querySelectorAll(".table_list");

if (table_list.length > 0 || tabs_table.length > 0) {
  function hideTabContent() {
    table_list.forEach((item) => {
      item.classList.remove("active");
    });

    tabs_table.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function showTabContent(i = 0) {
    table_list[i].classList.add("active");
    tabs_table[i].classList.add("active");
  }

  hideTabContent();
  showTabContent();

  tabs_table.forEach((tabs_table, index) => {
    tabs_table.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
}
/*******************************************************************************************/

$(function () {
  $(".scroll1").infiniteslide({
    speed: 40,
    direction: "left",
  });
});

$("#carousel01").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$("#carousel02").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$("#carousel03").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$("#carousel04").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$("#carousel05").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

$("#carousel06").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});

$("#carousel07").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(".achivementScroll").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 2,
    },

    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

var owl = $(".screenshot_slider").owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 4000,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

$(document).ready(function () {
  $("#myModal").modal("show");
});

/*******************************************************************************************/

var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}

/*******************************************************************************************/

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
});

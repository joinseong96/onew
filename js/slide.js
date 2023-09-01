$(function () {
  var swiper = new Swiper(".onew_curation_slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    breakpoints: {
      769: {
        spaceBetween: 10,
      },
      1580: {
        spaceBetween: 40,
      },
    },
    pagination: {
      el: ".swiper-scrollbar",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        var pct = (current / total) * 100 + "%";
        $(".swiper-scrollbar .progress").width(pct);
      },
    },
  });

  // var swiper = new Swiper('.wheel_slide_wrap', {
  //     speed: 600,
  //     direction: 'vertical',
  //     effect : 'fade',
  //     mousewheel: true,
  //     watchOverflow : true,
  //     on: {
  //         slideChange: function() {
  //             $("body, html").animate({ scrollTop: $('#wheel_slide').offset().top}, 400);
  //             setTimeout(function () {
  //               swiper.params.touchReleaseOnEdges = false;
  //               swiper.params.mousewheel.releaseOnEdges = false;
  //             });
  //         },
  //         reachEnd: function() {
  //             setTimeout(function () {
  //                 swiper.params.touchReleaseOnEdges = true;
  //                 swiper.params.mousewheel.releaseOnEdges = true;
  //             }, 500);
  //         },
  //         reachBeginning: function() {
  //             setTimeout(function () {
  //                 swiper.params.touchReleaseOnEdges = true;
  //                 swiper.params.mousewheel.releaseOnEdges = true;
  //             }, 500);
  //         }
  //       },
  // });

  window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".flow_slide_list");
    var $first;
    var $last;

    $img.each(function () {
      $(this).css("left", bannerLeft);
      bannerLeft += $(this).width() + 5;
      $(this).attr("id", "banner" + ++imgCnt);
    });

    if (imgCnt > 6) {
      last = imgCnt;

      setInterval(function () {
        $img.each(function () {
          $(this).css("left", $(this).position().left - 1);
        });
        $first = $("#banner" + first);
        $last = $("#banner" + last);
        if ($first.position().left < -400) {
          $first.css("left", $last.position().left + $last.width() + 5);
          first++;
          last++;
          if (last > imgCnt) {
            last = 1;
          }
          if (first > imgCnt) {
            first = 1;
          }
        }
      }, 20);
    }
  };
});

$(function () {
  let ww = window.innerWidth;
  let mySwiper = undefined;
  function responsiveSwiper() {
    if (ww >= 770 && mySwiper == undefined) {
      swiper = new Swiper(".wheel_slide_wrap", {
        speed: 600,
        direction: "vertical",
        effect: "fade",
        mousewheel: true,
        watchOverflow: true,
        on: {
          slideChange: function () {
            $("body, html").animate(
              { scrollTop: $("#wheel_slide").offset().top },
              400
            );
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = false;
              swiper.params.mousewheel.releaseOnEdges = false;
            });
          },
          reachEnd: function () {
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = true;
              swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
          },
          reachBeginning: function () {
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = true;
              swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
          },
        },
      });
    } else if (ww < 770 && mySwiper == undefined) {
      swiper = new Swiper(".wheel_slide_wrap", {
        loop: true,
        speed: 900,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
          delay: 2000,
        },
        effect: "slide",
      });
    }
  }

  responsiveSwiper();

  window.addEventListener("resize", function () {
    let nowWid = window.innerWidth;
    console.log(ww, nowWid)
    if ((ww > 770 && nowWid < 770) || (ww < 770 && nowWid > 770)) {
      responsiveSwiper();
    }
  });
});

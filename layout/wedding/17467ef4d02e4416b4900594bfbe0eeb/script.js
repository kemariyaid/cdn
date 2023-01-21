(function () {
    "use strict";
    var h = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          h.Android() || h.BlackBerry() || h.iOS() || h.Opera() || h.Windows()
        );
      },
    };
  
    var a = function () {
        h.any() ||
          ($(".js-fullheight").css("height", $(window).height()),
          $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
          }));
      },
      c = function () {
        $(".js-oliven-nav-toggle").on("click", function (c) {
          c.preventDefault();
          var a = $(this);
          $("body").hasClass("offcanvas")
            ? (a.removeClass("active"), $("body").removeClass("offcanvas"))
            : (a.addClass("active"), $("body").addClass("offcanvas"));
        });
      },
      d = function () {
        $(document).click(function (c) {
          var a = $("#oliven-aside, .js-oliven-nav-toggle");
          !a.is(c.target) &&
            0 === a.has(c.target).length &&
            $("body").hasClass("offcanvas") &&
            ($("body").removeClass("offcanvas"),
            $(".js-oliven-nav-toggle").removeClass("active"));
        }),
          $(window).scroll(function () {
            $("body").hasClass("offcanvas") &&
              ($("body").removeClass("offcanvas"),
              $(".js-oliven-nav-toggle").removeClass("active"));
          });
      },
      e = function () {
        $(".oliven-hero .flexslider").flexslider({
          animation: "fade",
          autoplay: !0,
          slideshowSpeed: 5e3,
          controlNav: !0,
          directionNav: !1,
          start: function () {
            setTimeout(function () {
              $(".slider-text").removeClass(
                "animate__animated animate__fadeInUp"
              ),
                $(".flex-active-slide")
                  .find(".slider-text")
                  .addClass("animate__animated animate__fadeInUp");
            }, 500);
          },
          before: function () {
            setTimeout(function () {
              $(".slider-text").removeClass(
                "animate__animated animate__fadeInUp"
              ),
                $(".flex-active-slide")
                  .find(".slider-text")
                  .addClass("animate__animated animate__fadeInUp");
            }, 500);
          },
        });
      };
    $(function () {
      a(), c(), d(), e();
    });
    var f = $(".bg-img, section");
    f.each(function () {
      $(this).attr("data-background") &&
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
    }),
      $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (c) {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            var d = $(this.hash);
            (d = d.length ? d : $("[name=" + this.hash.slice(1) + "]")),
              d.length &&
                (c.preventDefault(),
                $("html, body").animate(
                  {
                    scrollTop: d.offset().top,
                  },
                  1e3,
                  function () {
                    var b = $(d);
                    return (
                      (b.focus(), !b.is(":focus")) &&
                      void (b.attr("tabindex", "-1"), b.focus())
                    );
                  }
                ));
          }
        }),
      $(window).on("load", function () {
        var d = $(".gallery-filter"),
          b = $("#gallery-filter");
        d.isotope({
          filter: "*",
          layoutMode: "masonry",
          animationOptions: {
            duration: 750,
            easing: "linear",
          },
        }),
          b.find("a").on("click", function () {
            var c = $(this).attr("data-filter");
            return (
              b.find("a").removeClass("active"),
              $(this).addClass("active"),
              d.isotope({
                filter: c,
                animationOptions: {
                  animationDuration: 750,
                  easing: "linear",
                  queue: !1,
                },
              }),
              !1
            );
          });
      }),
      $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        gallery: {
          enabled: !0,
          navigateByImgClick: !0,
          preload: [0, 1],
        },
      });
  })(),
    (function () {
      const h = 6e4,
        a = 36e5,
        b = 864e5;
      let c = new Date("Nov 12, 2022 10:00:00").getTime(),
        d = setInterval(function () {
          let e = new Date().getTime(),
            f = c - e;
          if (
            ((document.getElementById("days").innerText = Math.floor(f / b)),
            (document.getElementById("hours").innerText = Math.floor(
              (f % b) / a
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (f % a) / h
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (f % h) / 1e3
            )),
            0 > f)
          ) {
            clearInterval(d);
            document.getElementById("days").innerText = 0;
            document.getElementById("hours").innerText = 0;
            document.getElementById("minutes").innerText = 0;
            document.getElementById("seconds").innerText = 0;
            document.getElementById("headline").innerText = "Hari Pernikahan!";
          }
        }, 0);
    })();
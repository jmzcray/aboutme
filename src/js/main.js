/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function($) {

  "use strict";

  /*---------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */
   $(window).load(function() {

      // will first fade out the loading animation
      $("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });

    });


    /*---------------------------------------------------- */
    /* FitText Settings
    ------------------------------------------------------ */
    setTimeout(function() {

     $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

    }, 100);


  /*---------------------------------------------------- */
  /* FitVids
  ------------------------------------------------------ */
    //$(".fluid-video-wrapper").fitVids();


  /*---------------------------------------------------- */
  /* Owl Carousel
  ------------------------------------------------------ */
  // $("#owl-slider").owlCarousel({
  //     navigation: false,
  //     pagination: true,
  //     itemsCustom : [
  //       [0, 1],
  //       [700, 2],
  //       [960, 3]
  //    ],
  //     navigationText: false
  // });


  /*----------------------------------------------------- */
  /* Alert Boxes
    ------------------------------------------------------- */
  // $('.alert-box').on('click', '.close', function() {
  //   $(this).parent().fadeOut(500);
  // });


  /*----------------------------------------------------- */
  /* Skill Bars - translating into number of years exp.
  ------------------------------------------------------- */
  var skills = $(".skill-bars li .progress span");
  skills.each(function () {
    var $skillyear = $(this), $skillTxt = $.trim($skillyear.text()), reg = /year[0-9]{4}/;
    if ($skillTxt.indexOf("year") > -1 && reg.test($skillTxt)) {
      var currentYear = new Date().getFullYear();
      $skillyear.text((currentYear-$skillTxt.substring(4)) + " years");
    }
  });


  /* Generic get random number */
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
  }

  /*----------------------------------------------------- */
  /* Stats Counter
  ------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

     //  **start populating the stat fields **
    stats.each(function () {
      var $stat = $(this), $statTxt = $.trim($stat.text()),
        max = new Date().getMilliseconds(), min = 1;
      if (($statTxt) === "") { // when empty, randomize from 1 to currentDate in milliseconds
      $stat.text(getRandomInt(min, max));
      } else if ($statTxt.indexOf("year") > -1) { // if specified a year, calculate from the year to currentYear x specified number
        var currentYear = new Date().getFullYear(), multiply=1;
        if ($statTxt.indexOf("*") > -1)  {
          var multiplier = $statTxt.indexOf("*");
          multiply = $statTxt.substring(multiplier+1, multiplier+2);
        }
        $stat.text( (currentYear-$statTxt.substring(4,8)) * multiply); // randomized from the specified min-max seprated by "-"
      } else if ($statTxt.indexOf("-") > -1) {
        var range = $statTxt.indexOf("-");
        if (range > 0) {
          min = $statTxt.substring(0, range);
        }
        if (range < $statTxt.length-1) {
          max = $statTxt.substring(range+1);
        }
        $stat.text(getRandomInt(min, max));
      }
    });
    // **end populating the stat fields **

   statSection.waypoint({

     handler: function(direction) {

        if (direction === "down") {

         stats.each(function () {
           var $this = $(this);

           $({ Counter: 0 }).animate({ Counter: $this.text() }, {
               duration: 4000,
               easing: 'swing',
               step: function (curValue) {
                  $this.text(Math.ceil(curValue));
              }
            });
        });

         }

         // trigger once only
         this.destroy();

    },

    offset: "74%"

  });


  /*---------------------------------------------------- */
  /*  Masonry
  ------------------------------------------------------ */
  var containerProjects = $('#folio-wrapper');

  containerProjects.imagesLoaded( function() {

    containerProjects.masonry( {
        itemSelector: '.folio-item',
        resize: true
    });

  });


  /*----------------------------------------------------*/
  /*  Modal Popup
  ------------------------------------------------------*/
   // $('.item-wrap a').magnificPopup({

   //    type:'inline',
   //    fixedContentPos: false,
   //    removalDelay: 300,
   //    showCloseBtn: false,
   //    mainClass: 'mfp-fade'

   // });

   // $(document).on('click', '.popup-modal-dismiss', function (e) {
   //   e.preventDefault();
   //   $.magnificPopup.close();
   // });


  /*---------------------------------------------------- */
  /* Smooth Scrolling
  ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {

     e.preventDefault();

     var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });

    });


  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
  ------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");
  var lastSecTop = sections.last().offset().top;

  sections.waypoint({

    handler: function(direction) {

      if (lastSecTop !== $(this.group.last().element).offset().top) {
        lastSecTop = $(this.group.last().element).offset().top;
        this.context.refresh();
      }

      var active_section;
      active_section = $('section#' + this.element.id);

      if (direction === "up") {active_section = active_section.prev();}

      var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");

    },
    offset: '100%'

  });

  /*---------------------------------------------------- */
  /*  Placeholder Plugin Settings
  ------------------------------------------------------ */
  $('input, textarea, select').placeholder();


  /*---------------------------------------------------- */
  /*  contact form
  ------------------------------------------------------ */

  /* local validation */
  $('#contactForm').validate({

    /* submit via ajax */
    submitHandler: function(form) {

      var sLoader = $('#submit-loader');

      $.ajax({

          type: "POST",
          url: "inc/sendEmail.php",
          data: $(form).serialize(),
          beforeSend: function() {

            sLoader.fadeIn();

          },
          success: function(msg) {

              // Message was sent
              if (msg === 'OK') {
                sLoader.fadeOut();
                 $('#message-warning').hide();
                 $('#contactForm').fadeOut();
                 $('#message-success').fadeIn();
              }
              // There was an error
              else {
                sLoader.fadeOut();
                 $('#message-warning').html(msg);
                $('#message-warning').fadeIn();
              }

          },
          error: function() {

            sLoader.fadeOut();
            $('#message-warning').html("Something went wrong. Please try again.");
            $('#message-warning').fadeIn();

          }

        });
      }

  });


  /*---------------------------------------------------- */
  /*  site preview
  ------------------------------------------------------ */
  $.fn.sitePreview = function() {
      var portSection = $("#portfolio"),
            folioItems = this;
        portSection.waypoint({
            handler: function(direction) {
                if (direction === "down") {
                       initPreview(folioItems);
                }
                this.destroy();
            }, offset: "25%"
        });
    };

    function loadPreview(item, view) {
      var site = item.attr('href'),
          strategy = (typeof(view) !== "undefined") ? view : "desktop",
          $img = item.find("img");

        if (strategy === "desktop") {
          item.removeAttr('data-mobile');
        } else {
          item.attr('data-mobile', '');
        }

        item.siblings('a.site-preview-toggle').toggleClass("disabled");
        $img.hide();
        $("<i class='fa fa-spin fa-spinner'></i>").insertBefore($img);

        var cacheDate = (localStorage.getItem("cacheAt") === null) ? null : localStorage.getItem("cacheAt"),
          rightNow = new Date().getTime(),
          folioKey = site + '-' + strategy;

        if ((rightNow - cacheDate)/(1000*60*60) > 3) { // cache is more than 3 hours, clear localStorage images
          localStorage.clear();
      }

        if ( !cacheDate || (localStorage.getItem(folioKey) === null) ) {
          $.ajax({
              type: 'GET',
              url: "https://www.googleapis.com/pagespeedonline/v1/runPagespeed",
              data: {
                url: site,
                  screenshot: true,
                  strategy: strategy
              }
          })
          .done(function(data) {
              var image = data.screenshot.data,
                currentDate;
              image = image.replace(/_/g, "/");
              image = image.replace(/-/g, "+");

              $img.attr('src', "data:image/jpeg;base64," + image)
                .show();

              currentDate = new Date().getTime();
              localStorage.setItem('cacheAt', currentDate);
              localStorage.setItem(folioKey, image);
          })
          .fail(function(jqXHR) {
              $img.attr('src', 'images/sample-image.jpg')
                .show();
          })
          .always(function() {
            item.find('i.fa-spinner').remove();
            item.siblings('a.site-preview-toggle').toggleClass("disabled");
          });

      } else {

        var image = localStorage.getItem(folioKey);
            $img.attr('src', "data:image/jpeg;base64," + image)
              .show();
            item.find('i.fa-spinner').remove();
            item.siblings('a.site-preview-toggle').toggleClass("disabled");
        }
    }

    function initPreview(folioItems) {
      folioItems.each(function() {
        var $this = $(this),
          label = $this.find("img").attr('alt');
        $this.find('.site-preview-label').text(label);
        loadPreview($this);
      });
    }


    var toggles = $("#portfolio .site-preview-toggle");

    toggles.each(function() {

       var toggleBtn = $(this),
         previewLink = toggleBtn.siblings('a');

       toggleBtn.on('click', function(e) {
         e.preventDefault();

         if (toggleBtn.hasClass('mobile-view')) {
           loadPreview(previewLink, "desktop");
         } else {
           loadPreview(previewLink, "mobile");
         }
         toggleBtn.find('span').toggleClass("current-view");
         toggleBtn.toggleClass('mobile-view');
       });
    });


  /*----------------------------------------------------- */
  /* Back to top
  ------------------------------------------------------- */
  var pxShow = 300; // height on which the button will show
  var fadeInTime = 400; // how slow/fast you want the button to show
  var fadeOutTime = 400; // how slow/fast you want the button to hide
  //var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
  $(window).scroll(function() {

    if (!( $("#header-search").hasClass('is-visible'))) {

      if ($(window).scrollTop() >= pxShow) {
        $("#go-top").fadeIn(fadeInTime);
      } else {
        $("#go-top").fadeOut(fadeOutTime);
      }

    }

  });

})(jQuery);

/*! jimz.id.au-aboutme 2017-05-30 */
!function(a){"use strict";function b(a,b){return Math.floor(Math.random()*(parseInt(b)-parseInt(a)+1))+parseInt(a)}function c(b,c){var d=b.attr("href"),e="undefined"!=typeof c?c:"desktop",f=b.find("img");"desktop"===e?b.removeAttr("data-mobile"):b.attr("data-mobile",""),b.siblings("a.site-preview-toggle").toggleClass("disabled"),f.hide(),a("<i class='fa fa-spin fa-spinner'></i>").insertBefore(f);var g=null===localStorage.getItem("cacheAt")?null:localStorage.getItem("cacheAt"),h=(new Date).getTime(),i=d+"-"+e;if((h-g)/36e5>3&&localStorage.clear(),g&&null!==localStorage.getItem(i)){var j=localStorage.getItem(i);f.attr("src","data:image/jpeg;base64,"+j).show(),b.find("i.fa-spinner").remove(),b.siblings("a.site-preview-toggle").toggleClass("disabled")}else a.ajax({type:"GET",url:"https://www.googleapis.com/pagespeedonline/v1/runPagespeed",data:{url:d,screenshot:!0,strategy:e}}).done(function(a){var b,c=a.screenshot.data;c=c.replace(/_/g,"/"),c=c.replace(/-/g,"+"),f.attr("src","data:image/jpeg;base64,"+c).show(),b=(new Date).getTime(),localStorage.setItem("cacheAt",b),localStorage.setItem(i,c)}).fail(function(a){f.attr("src","images/sample-image.jpg").show()}).always(function(){b.find("i.fa-spinner").remove(),b.siblings("a.site-preview-toggle").toggleClass("disabled")})}function d(b){b.each(function(){var b=a(this),d=b.find("img").attr("alt");b.find(".site-preview-label").text(d),c(b)})}a(window).load(function(){a("#loader").fadeOut("slow",function(){a("#preloader").delay(300).fadeOut("slow")})}),setTimeout(function(){a("#intro h1").fitText(1,{minFontSize:"42px",maxFontSize:"84px"})},100);var e=a(".skill-bars li .progress span");e.each(function(){var b=a(this),c=a.trim(b.text()),d=/year[0-9]{4}/;if(c.indexOf("year")>-1&&d.test(c)){var e=(new Date).getFullYear();b.text(e-c.substring(4)+" years")}});var f=a("#stats"),g=a(".stat-count");g.each(function(){var c=a(this),d=a.trim(c.text()),e=(new Date).getMilliseconds(),f=1;if(""===d)c.text(b(f,e));else if(d.indexOf("year")>-1){var g=(new Date).getFullYear(),h=1;if(d.indexOf("*")>-1){var i=d.indexOf("*");h=d.substring(i+1,i+2)}c.text((g-d.substring(4,8))*h)}else if(d.indexOf("-")>-1){var j=d.indexOf("-");j>0&&(f=d.substring(0,j)),j<d.length-1&&(e=d.substring(j+1)),c.text(b(f,e))}}),f.waypoint({handler:function(b){"down"===b&&g.each(function(){var b=a(this);a({Counter:0}).animate({Counter:b.text()},{duration:4e3,easing:"swing",step:function(a){b.text(Math.ceil(a))}})}),this.destroy()},offset:"74%"});var h=a("#folio-wrapper");h.imagesLoaded(function(){h.masonry({itemSelector:".folio-item",resize:!0})}),a(".smoothscroll").on("click",function(b){b.preventDefault();var c=this.hash,d=a(c);a("html, body").stop().animate({scrollTop:d.offset().top},800,"swing",function(){window.location.hash=c})});var i=a("section"),j=a("#nav-wrap a"),k=i.last().offset().top;i.waypoint({handler:function(b){k!==a(this.group.last().element).offset().top&&(k=a(this.group.last().element).offset().top,this.context.refresh());var c;c=a("section#"+this.element.id),"up"===b&&(c=c.prev());var d=a('#nav-wrap a[href="#'+c.attr("id")+'"]');j.parent().removeClass("current"),d.parent().addClass("current")},offset:"100%"}),a("input, textarea, select").placeholder(),a("#contactForm").validate({submitHandler:function(b){var c=a("#submit-loader");a.ajax({type:"POST",url:"inc/sendEmail.php",data:a(b).serialize(),beforeSend:function(){c.fadeIn()},success:function(b){"OK"===b?(c.fadeOut(),a("#message-warning").hide(),a("#contactForm").fadeOut(),a("#message-success").fadeIn()):(c.fadeOut(),a("#message-warning").html(b),a("#message-warning").fadeIn())},error:function(){c.fadeOut(),a("#message-warning").html("Something went wrong. Please try again."),a("#message-warning").fadeIn()}})}}),a.fn.sitePreview=function(){var b=a("#portfolio"),c=this;b.waypoint({handler:function(a){"down"===a&&d(c),this.destroy()},offset:"25%"})};var l=a("#portfolio .site-preview-toggle");l.each(function(){var b=a(this),d=b.siblings("a");b.on("click",function(a){a.preventDefault(),b.hasClass("mobile-view")?c(d,"desktop"):c(d,"mobile"),b.find("span").toggleClass("current-view"),b.toggleClass("mobile-view")})});var m=300,n=400,o=400;a(window).scroll(function(){a("#header-search").hasClass("is-visible")||(a(window).scrollTop()>=m?a("#go-top").fadeIn(n):a("#go-top").fadeOut(o))})}(jQuery);
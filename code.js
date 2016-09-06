$(document).ready(function() {
   $('.same-page').click(function() {
      $("li a").removeClass('underline')
      $(this).addClass('underline')
   })

   $('.about').click(function() {
      $("html, body").animate({
         scrollTop: $('#about').offset().top
      }, 1000);
      return false;

      e.preventDefault();
   });

   $('.process').click(function() {
      $("html, body").animate({
         scrollTop: $('#process').offset().top
      }, 1000);
      return false;

      e.preventDefault();
   });

   $('.contact').click(function() {
      $("html, body").animate({
         scrollTop: $('#contact').offset().top
      }, 1000);
      return false;

      e.preventDefault();
   });

   $('#arrow').click(function() {
      $("html, body").animate({
         scrollTop: $('#about').offset().top
      }, 1000);
      return false;

      e.preventDefault();
   });

   $(function(){
      if($(window).width()<750){
         $(".img-change").attr("src","images/process2.png");

         $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 700 && scroll < 2700) {
               $("li a").removeClass('underline')
               $(".about").addClass('underline')
               $("#arrow").addClass('hide');
               $("#header").addClass('back');
            }
            if (scroll > 2700) {
               $("li a").removeClass('underline')
               $(".process").addClass('underline')
            }
            if (scroll > 4200) {
               $("li a").removeClass('underline')
               $(".contact").addClass('underline')
            }
            if (scroll < 700) {
               $("li a").removeClass('underline')
               $("#arrow").removeClass('hide');
               $("#header").removeClass('back'), 500;
            }
         });
      }

      if($(window).width()>750){
         $(".img-change").attr("src","images/process.png");

         $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 700 && scroll < 1400) {
               $("li a").removeClass('underline')
               $(".about").addClass('underline')
               $("#arrow").addClass('hide');
               $("#header").addClass('back');
            }
            if (scroll > 1400) {
               $("li a").removeClass('underline')
               $(".process").addClass('underline')
            }
            if (scroll > 1750) {
               $("li a").removeClass('underline')
               $(".contact").addClass('underline')
            }
            if (scroll < 600) {
               $("li a").removeClass('underline')
               $("#arrow").removeClass('hide');
               $("#header").removeClass('back'), 500;
            }
         });
      }
   });

   $(window).on("resize",function(){
      if($(window).width()<750){
         $(".img-change").attr("src","images/process2.png");

         $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 700 && scroll < 2700) {
               $("li a").removeClass('underline')
               $(".about").addClass('underline')
               $("#arrow").addClass('hide');
               $("#header").addClass('back');
            }
            if (scroll > 2700) {
               $("li a").removeClass('underline')
               $(".process").addClass('underline')
            }
            if (scroll > 4200) {
               $("li a").removeClass('underline')
               $(".contact").addClass('underline')
            }
            if (scroll < 700) {
               $("li a").removeClass('underline')
               $("#arrow").removeClass('hide');
               $("#header").removeClass('back'), 500;
            }
         });
      }

      if($(window).width()>750){
         $(".img-change").attr("src","images/process.png");

         $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 700 && scroll < 1400) {
               $("li a").removeClass('underline')
               $(".about").addClass('underline')
               $("#arrow").addClass('hide');
               $("#header").addClass('back');
            }
            if (scroll > 1400) {
               $("li a").removeClass('underline')
               $(".process").addClass('underline')
            }
            if (scroll > 1750) {
               $("li a").removeClass('underline')
               $(".contact").addClass('underline')
            }
            if (scroll < 600) {
               $("li a").removeClass('underline')
               $("#arrow").removeClass('hide');
               $("#header").removeClass('back'), 500;
            }
         });
      }
   });
});

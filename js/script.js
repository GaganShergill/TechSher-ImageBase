$(document).ready(function(){
    // masonry initialization
    var $grid = $('.main_container').imagesLoaded( function() {
      $grid.masonry({
          // options
          itemSelector : '.pin-column',
          isAnimated: true,
          isFitWidth: true
      });
    });
    // onclick event handler (for comments)
    $('.comment_tr').click(function () {
        $(this).toggleClass('disabled');
        $(this).parent().parent().parent().find('form').slideToggle(250, function () {
            $('.main_container').masonry();
        });
    });

    $('.navItem > a').click(function () {
      if ($(this).parent().find('ul').css('display') == 'none') {
        $(this).parent().find('ul').css('display', 'block');
      } else {
        $(this).parent().find('ul').css('display', 'none');
      }
    });

    $("input[type='text']").focus(
        function(){
            $(this).parents('.search').css('background-color','#FFFFFF');
        }).blur(
        function(){
            $(this).parents('.search').css('background-color','#FAF7F7');
    });

});

function myFunction() {
  var x = document.querySelector(".nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

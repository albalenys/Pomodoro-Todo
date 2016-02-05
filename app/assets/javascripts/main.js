$(document).ready(function() {
  $("a.fancybox").fancybox();

  $(".fancybox-form").submit(function(event) {
    parent.$.fancybox.close();
  });

  $(".fancybox").fancybox({
    type: 'iframe',
    afterClose: function () {
        parent.location.reload(true);
    }
  });

  $(".start").submit(function(event) {
    event.preventDefault();
    $(".clock-info").empty();
    var count = 10;
    var counter = setInterval(timer, 1000);

    function timer() {
      count -= 1;
      $(".clock").html(count);
      if (count <= 0) {
        clearInterval(counter);
        $(".clock").html("<p>end!</p>");
      }
    }
  });
});

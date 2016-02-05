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
    var count = $("#length").val();
    var task = $("#text").val();
    $(".clock-info").html("<h4>Work in progress...</h4><p>You are working on task <em>" + task + "</em></p>");
    $(".clock").html(count + ":00");
    var counter = setInterval(timer, 60000);

    function timer() {
      count -= 1;
      $(".clock").html(count + ":00");
      if (count <= 0) {
        clearInterval(counter);
        alert("You gained a pomodoro!");
      }
    }
  });
});

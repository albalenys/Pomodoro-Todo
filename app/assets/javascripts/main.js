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
    var count = $(this).find('input[type="text"]').val();
    $(".clock-info").html(
      "<p>You are working on task: <%= @task.text %></p>"
      );
    var counter = setInterval(timer, 60000);

    function timer() {
      count -= 1;
      $(".clock").html(count + ":00");
      if (count <= 0) {
        clearInterval(counter);
        $(".clock").html("<p>end!</p>");
      }
    }
  });
});

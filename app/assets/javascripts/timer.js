function initTimer() {
  $("#start").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var task = $("#text").val();
      var minutes = $("#length").val();
      var seconds = 0;

      $(".clock-info").html("<h4>Work in progress...</h4><p>You are working on task <em>" + task + "</em></p>");
      $( ".clock" ).show();
      $( ".clock-bg" ).show();
      $(".minutes").html(minutes - 1);
      $(".seconds").html("0" + seconds);
      var minCounter = setInterval(minTimer, 60000);
      var secCounter = setInterval(secTimer, 1000);

      function minTimer() {
        minutes -= 1;
        $(".minutes").html(minutes);
      }

      function secTimer() {
        seconds -= 1;

        if (seconds <= 0) {
          if (minutes <= 0) {
            clearInterval(minCounter);
            clearInterval(secCounter);
            alert("You gained a pomodoro!");
          }
          seconds = 59;
          $(".seconds").html(seconds);
        }
        else if (seconds < 10) {
          $(".seconds").html("0" + seconds);
        }
        else {
          $(".seconds").html(seconds);
        }
      }
    })
  });
}
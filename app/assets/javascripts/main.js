$(document).ready(function() {
  // Fancybox
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

  // Ajax
  $("#add-task").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      new_task = $(response).find(".list li").last();
      $(".list").append(new_task[0]);
      $("#add-task").trigger("reset");
    })
  });

  // Timer
  $(".start").submit(function(event) {
    event.preventDefault();
    var task = $("#text").val();
    var minutes = $("#length").val();
    var seconds = 0;

    $(".clock-info").html("<h4>Work in progress...</h4><p>You are working on task <em>" + task + "</em></p>");
    $( ".clock" ).show();
    $( ".clock-bg" ).show();
    $(".minutes").html(minutes);
    $(".seconds").html("0" + seconds);
    var minCounter = setInterval(minTimer, 60000);
    var secCounter = setInterval(secTimer, 1000);

    function minTimer() {
      minutes -= 1;
      $(".minutes").html(minutes);
      if (minutes <= 0) {
        clearInterval(mincounter);
        alert("You gained a pomodoro!");
      }
    }

    function secTimer() {
      seconds -= 1;

      if (seconds <= 0) {
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
  });
});

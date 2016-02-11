function initTimer() {
  $("#start-break").submit(function(event) {
    event.preventDefault();
    minutes = $("#length").val();
    seconds = 0;
    message = "Your break is over!";
    if(minutes < 15 || minutes > 59 || isNaN(minutes)) {
      $("#errors").html("<p class='notification'>Must enter integer from 15 to 59.</p>");
    }
    else {
      $(".clock-info").html("<h4>Taking a break...</h4><p>You are now taking a break before continuing your work.</p>");
      appendClock();
    }
  })

  $("#start-break").ajaxComplete(function() {
    window.location.href = "/";
  });

  $("#start-task").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method'),
      success: function(response) {
        handleErrors(response);
        task = $("#text").val();
        minutes = $("#length").val();
        seconds = 0;

        if(minutes >= 10 && minutes <= 59) {
          message = "You gained a pomodoro!";
          $(".clock-info").html("<h4>Work in progress...</h4><p>You are working on task <em>" + task + "</em></p>");
          appendClock();
        }
      }
    })
  });
}

function appendClock() {
  $(".clock").show();
  $(".clock-bg").show();
  $(".minutes").html(minutes - 1);
  $(".seconds").html(59);
  minTimer();
  secTimer();
}

function minTimer() {
  minInterval = setInterval(minCount, 60000);

  function minCount() {
    minutes -= 1;
    $(".minutes").html(minutes);
  }
}

function secTimer() {
  secInterval = setInterval(secCount, 1000);

  function secCount() {
    seconds -= 1;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minInterval);
        clearInterval(secInterval);
        sweetAlert({
          title: "Good job!",
          text: message,
          type: "success"
        },
        function () {
            window.location.href = "/";
        });
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
}


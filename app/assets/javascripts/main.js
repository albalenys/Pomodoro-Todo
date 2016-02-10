$(document).ready(function() {
  initFancyBox();
  initTimer();
  taskAjax();
});

function handleErrors(response) {
  var errors = $(response).find("#errors");
  $("#errors").html(errors);
  errors ? true : false
}

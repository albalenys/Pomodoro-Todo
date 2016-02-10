$(document).ready(function() {
  initFancyBox();
  initTimer();
  taskAjax();
});

function handleErrors(response) {
  var errors = $(response).find("#errors");
  $("#errors").html(errors);
  return errors.length > 0;
}

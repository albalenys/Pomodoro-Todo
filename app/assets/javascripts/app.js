var app = angular.module("myApp", [])

$(document).ready(function() {
  initFancyBox();
  initTimer();
  initTaskAjax();
});

function handleErrors(response) {
  var errors = $(response).find("#errors").children();
  $("#errors").html(errors);
  return errors.length > 0;
}

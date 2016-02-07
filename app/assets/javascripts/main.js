$(document).ready(function() {
  initFancyBox();
  initTimer();

  $("#add-task").on("submit", "form", function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      newTask = $(response).find(".list li").last();
      $(".list").append(newTask[0]);
      $("#add-task form").trigger("reset");
    })
  });

  // $(document).on("click", ".delete-task", function(event) {
  //   event.preventDefault();
  //   $(event.target).closest("li").remove();
  // });

  $(".edit-task").click(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      editForm = $(event.target).closest("li").find(".task-form")
      currentTask = $(event.target).closest("li").find(".task")
      editForm.show();
      currentTask.hide();
    })
  });

});

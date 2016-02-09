function taskAjax() {
  $(".list li").hover(
  function(){
    $(event.target).find(".task-options").fadeIn(300);
  },
  function(){
    $(event.target).find(".task-options").fadeOut(300);
  });

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

  $(".list").on("click", ".delete-task", function(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to delete this task?")) {
      $(event.target).closest("li").remove();
    }
  });

  $(".edit-task").click(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      editForm = $(event.target).closest("li").find(".task-form");
      currentTask = $(event.target).closest("li").find(".task");
      editForm.show();
      currentTask.hide();
    })
  });
}
function taskAjax() {
  $(".task").hoverIntent(
    function(event){
      $(event.target).find(".task-options").fadeIn(200);
    },
    function(event){
      $(event.target).find(".task-options").fadeOut(200);
    },
    {
      selector: ".list"
    });

  $("#add-task").on("submit", "form", function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var errors = handleErrors(response);
      if(!errors) {
        var newTask = $(response).find(".list li").last();
        var updatedMsg = $(response).find("#empty-list");
        $("#empty-list").html(updatedMsg);
        $(".list ol").append(newTask[0]);
        $("#add-task form").trigger("reset");
      }
    })
  });

  $(".list").on("click", ".delete-task", function(event) {
    event.preventDefault();
    if(!confirm("Are you sure you want to delete this task?")){
      event.preventDefault();
      return false;
    }
    $(event.target).closest("li").remove();
    if($(".list li").length == 0) {
      $("#empty-list").html("<p>You currently don't have anything in your todo list.<br>Start striking out your tasks and goals today!</p>");
    }
    return true;
  });

  $(".edit-task").click(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var editForm = $(event.target).closest("li").find(".task-form");
      editForm.show();
      var task = $(event.target).closest("li").find(".task");
      task.hide();
    })
  });

  $(".task-form").on("submit", "form", function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var errors = handleErrors(response);
      if(!errors) {
        var editForm = $(event.target).closest("li").find(".task-form");
        editForm.hide();
        var task = $(event.target).closest("li").find(".task");
        var task_id = task.first().attr("id")
        var newTask = $(response).find("#" + task_id);
        task.replaceWith(newTask);
        task.show();
      }
    })
  });
}
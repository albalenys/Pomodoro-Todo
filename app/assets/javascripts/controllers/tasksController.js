app.controller('tasksController', ['$scope', '$http', function($scope, $http) {
  $scope.delete = function(task) {
    $http.delete('/tasks/' + task.id).success(function(response) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
    });
  };
}]);

function initTaskAjax() {
  $(".list").hoverIntent({
    over: function(event) {
      $(event.target).find(".task-options").fadeIn(200);
    },
    out: function(event){
      $(event.target).find(".task-options").fadeOut(200);
    },
    selector: ".task"
  });

  // $("#add-task").on("submit", "form", function(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     url: $(this).attr('action'),
  //     data: $(this).serialize(),
  //     method: $(this).attr('method')
  //   }).done(function(response) {
  //     var errors = handleErrors(response);
  //     if(!errors) {
  //       var newTask = $(response).find(".list li").last();
  //       var updatedMsg = $(response).find("#empty-list");
  //       $("#empty-list").html(updatedMsg);
  //       $(".list ol").append(newTask[0]);
  //       $("#add-task form").trigger("reset");
  //     }
  //   })
  // });

  $(".list").on("click", ".edit-task", function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var editForm = $(event.target).closest("li").find(".edit-task-form");
      editForm.show();
      var task = $(event.target).closest("li").find(".task");
      task.hide();
    })
  });

  $(".list").on("submit", ".edit-task-form form", function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method')
    }).done(function(response) {
      var errors = handleErrors(response);
      if(!errors) {
        var editForm = $(event.target).closest("li").find(".edit-task-form");
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
function initFancyBox() {
  $("a.fancybox").fancybox();

  $(".fancybox-form").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      method: $(this).attr('method'),
      success: function(response) {
        var errors = handleErrors(response);
        if(!errors) {
          parent.$.fancybox.close();
          parent.location.reload(true);
        }
      },
      fail: function() {
        alert("The request has failed.");
      }
    })
  });
}
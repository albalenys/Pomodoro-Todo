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
        }
      },
      fail: function() {
        alert("The request has failed.");
      }
    })
  });

  $(".fancybox").fancybox({
    type: 'iframe',
    afterClose: function () {
        parent.location.reload(true);
    }
  });
}
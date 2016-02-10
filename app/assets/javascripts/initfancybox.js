function initFancyBox() {
  $("a.fancybox").fancybox();

  $(".fancybox-form").submit(function(event) {
    if(!handleErrors(response)) {
      parent.$.fancybox.close();
    }
  });

  $(".fancybox").fancybox({
    type: 'iframe',
    afterClose: function () {
        parent.location.reload(true);
    }
  });
}
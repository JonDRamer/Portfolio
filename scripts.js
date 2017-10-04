$('document').ready((event) => {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  let clipboard = new Clipboard('.copyEmail');

  clipboard.on('success', function(e) {
      e.clearSelection();
      $("#emailToolTip").tooltip({
        title: "Email Copied",
        placement: "top"
      });
      $("#emailToolTip").tooltip('show');
      setTimeout(()=> {
        $("#emailToolTip").tooltip('hide');
      }, 1000)
  });
});

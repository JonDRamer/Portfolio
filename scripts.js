$('document').ready((event) => {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
      console.log("Tooltips enabled");
  });

  let Clipboard = new Clipboard('.copyEmail');

  Clipboard.on('success', function(e) {
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

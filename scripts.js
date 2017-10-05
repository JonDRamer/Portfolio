"use strict";

$('document').ready((event) => {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  let headerClipboard = new Clipboard('.headerCopyEmail');
  let hiddenHeaderClipboard = new Clipboard('.hiddenHeaderCopyEmail');
  let hiddenFooterClipboard = new Clipboard('.hiddenFooterCopyEmail');
  let footerClipboard = new Clipboard('.footerCopyEmail');

  headerClipboard.on('success', function(e) {
      e.clearSelection();
      $("#headerEmailToolTip").tooltip({
        title: "Email Copied",
        placement: "bottom",
        trigger: "click"
      });
      $("#headerEmailToolTip").tooltip('show');
      setTimeout(()=> {
        $("#headerEmailToolTip").tooltip('hide');
      }, 1000)
  });

  hiddenHeaderClipboard.on('success', function(e) {
      e.clearSelection();
      $("#hiddenHeaderEmailToolTip").tooltip({
        title: "Email Copied",
        placement: "top",
        trigger: "click"
      });
      $("#hiddenHeaderEmailToolTip").tooltip('show');
      setTimeout(()=> {
        $("#hiddenHeaderEmailToolTip").tooltip('hide');
      }, 1000)
  });

  hiddenFooterClipboard.on('success', function(e) {
      e.clearSelection();
      $("#hiddenFooterEmailToolTip").tooltip({
        title: "Email Copied",
        placement: "top",
        trigger: "click"
      });
      $("#hiddenFooterEmailToolTip").tooltip('show');
      setTimeout(()=> {
        $("#hiddenFooterEmailToolTip").tooltip('hide');
      }, 1000)
  });

  footerClipboard.on('success', function(e) {
      e.clearSelection();
      $("#footerEmailToolTip").tooltip({
        title: "Email Copied",
        placement: "top",
        trigger: "click"
      });
      $("#footerEmailToolTip").tooltip('show');
      setTimeout(()=> {
        $("#footerEmailToolTip").tooltip('hide');
      }, 1000)
  });

});

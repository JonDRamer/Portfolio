"use strict";

$('document')
  .ready((event) => {

    $(function() {
      $('[data-toggle="tooltip"]')
        .tooltip()
    });

    let headerClipboard = new Clipboard('.headerCopyEmail');
    let hiddenHeaderClipboard = new Clipboard('.hiddenHeaderCopyEmail');
    let hiddenFooterClipboard = new Clipboard('.hiddenFooterCopyEmail');
    let footerClipboard = new Clipboard('.footerCopyEmail');

    headerClipboard.on('success', function(e) {
      e.clearSelection();
      $("#headerEmailToolTip")
        .tooltip({
          title: "Email Copied",
          placement: "bottom",
          trigger: "click"
        });
      $("#headerEmailToolTip")
        .tooltip('show');
      setTimeout(() => {
        $("#headerEmailToolTip")
          .tooltip('hide');
      }, 1000)
    });

    hiddenHeaderClipboard.on('success', function(e) {
      e.clearSelection();
      $("#hiddenHeaderEmailToolTip")
        .tooltip({
          title: "Email Copied",
          placement: "top",
          trigger: "click"
        });
      $("#hiddenHeaderEmailToolTip")
        .tooltip('show');
      setTimeout(() => {
        $("#hiddenHeaderEmailToolTip")
          .tooltip('hide');
      }, 1000)
    });

    hiddenFooterClipboard.on('success', function(e) {
      e.clearSelection();
      $("#hiddenFooterEmailToolTip")
        .tooltip({
          title: "Email Copied",
          placement: "top",
          trigger: "click"
        });
      $("#hiddenFooterEmailToolTip")
        .tooltip('show');
      setTimeout(() => {
        $("#hiddenFooterEmailToolTip")
          .tooltip('hide');
      }, 1000)
    });

    footerClipboard.on('success', function(e) {
      e.clearSelection();
      $("#footerEmailToolTip")
        .tooltip({
          title: "Email Copied",
          placement: "top",
          trigger: "click"
        });
      $("#footerEmailToolTip")
        .tooltip('show');
      setTimeout(() => {
        $("#footerEmailToolTip")
          .tooltip('hide');
      }, 1000)
    });

//  Fetches and displays blg posts from Medium
    $(function() {
      let $content = $('#jsonContent');
      let data = {
        rss_url: 'https://medium.com/feed/@JonRamer'
      };
      $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
        if (response.status == 'ok') {
          let output = '';
          $.each(response.items, function(k, item) {
            let visibleSm;
            if (k < 3) {
              visibleSm = '';
            } else {
              visibleSm = ' visible-sm';
            }

            output += `<div class="blog-item col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0${visibleSm}">`;
            output += '<div class="blog-post"><header>';

            let tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
            let srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
            let srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
            let srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
            let src = item.description.substring(srcStart, srcEnd); // Extract just the URL
            output += `<div class="blog-element"><img class="blogImage img-responsive" src="${src}"></div></header>`;
            output += `<div class="blog-content"><h4><a target="_blank" href="${item.link}">${item.title}</a></h4>`;
            let yourString = item.description.replace(/<img[^>]*>/g, "");
            let maxLength = 120 // maximum number of characters to extract
            //trim the string to the maximum length
            let trimmedString = yourString.substr(0, maxLength);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            output += `<p>${trimmedString}...</p>`;
            output += '</div></div></div>';
            return k < 2;
          });
          $content.html(output);
        }
      });
    });

  });

$(window).scroll(function(event) {
    $("section").each(function(i, el) {
        let section = $(el);
        if (section.visible(true)) {
            setTimeout(function() {
                section.addClass("come-in");
            }, 100);  
        }
    });
    $(".separator").each(function(i, el) {
        let separator = $(el);
        if (separator.visible(true)) {
            separator.addClass("appear");
        }  else {
            separator.removeClass('appear');
        }
    });
    $('section#start').removeClass('come-in');
});
// $( document ).ready(function() {
//     [].forEach.call(document.querySelectorAll('img[src]'), function(img) {
//           img.setAttribute('src', img.getAttribute('data-src'));
//           img.onload = function() {
//              img.removeAttribute('data-src');
//           };
//     });
//  });
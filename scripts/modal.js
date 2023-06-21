// modals and buttons are aligned, so the first button shows the first modal, and so on.
let modals = document.querySelectorAll('div.modal');
$('button').each( function(index) {
    $(this).click( function() {
        /*modals[index].style.display = 'block';*/
        modals[index].classList.add('show-modal');
    });
});
$('span.close').each( function(index) {
    $(this).click( function() {
        /*modals[index].style.display = 'none';*/
        modals[index].classList.remove('show-modal');
    });
});
$(window).click( function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show-modal');
    }
});
$('.modal-content figure').click( function(){
    $(this)[0].classList.toggle('modal-figure');
});
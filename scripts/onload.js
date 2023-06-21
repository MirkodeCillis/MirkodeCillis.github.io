function onLoad() {
    // display the content
    $('#loader').hide();
    $('#content').show();
    // if it's morning, the site will have a light theme, 
    // otherwise it will be set a dark theme
    let hour = (new Date()).getHours();
    if ( hour <= 5 || hour >= 19) {
        $('.toggle-state').prop('checked', true);
        darkmode();
    } else {
        $('.toggle-state').prop('checked', false);
        lightMode();
    }
}
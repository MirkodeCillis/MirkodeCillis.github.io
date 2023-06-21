$('#form-contact').submit( function() {
    let error=false;
    if($('#email')[0].value === '') {
        error = true;
        $('#email').css('border-color', 'red');
    }
    if($('#subject')[0].value === '') {
        error = true;
        $('#subject').css('border-color', 'red');
    }
    if($('#object')[0].value === '') {
        error = true;
        $('#object').css('border-color', 'red');
    }
    if(error) {
        alert("Completare tutti i campi.");
    } else {
        $.post('../mail.php', {
            email: $('#email')[0].value,
            subject: $('#subject')[0].value,
            object: $('#object')[0].value
        });
        alert('L\'email è stata inviata correttamente.');
    }
    return !error;
});
$('#email').focus( function() {
    $('#email').css('border-color', 'rgba(255, 255, 255, 0.75)');
});
$('#subject').focus( function() {
    $('#subject').css('border-color', 'rgba(255, 255, 255, 0.75)');
});
$('#object').focus( function() {
    $('#object').css('border-color', 'rgba(255, 255, 255, 0.75)');
});
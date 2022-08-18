$('body').one('click', function() {
    $('#music')[0].play()

    $('.audio').addClass('mrotate')
    $('.icon-cancel').hide()
})

$('#audio').on('click', function() {
    if ($('.audio').hasClass('mrotate')) {
        $('#music')[0].pause()
        $('.audio').removeClass('mrotate')
        $('.icon-cancel').show()
    } else {
        $('#music')[0].play()
        $('.audio').addClass('mrotate')
        $('.icon-cancel').hide()
    }
})
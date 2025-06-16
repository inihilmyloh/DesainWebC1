$(document).ready(function () {
    var sectionArray = [1, 2, 3, 4, 5];

    // Fungsi untuk scroll ke section dan tutup menu (kalau mobile)
    $('.click-scroll').each(function (index) {
        $(this).on('click', function (e) {
            e.preventDefault();

            var targetOffset = $('#section_' + sectionArray[index]).offset().top;

            $('html, body').animate({
                scrollTop: targetOffset
            }, 300);

            // Tutup menu (untuk mobile)
            $('#navbarMenu').collapse('hide');
        });
    });

    // Fungsi scroll untuk menambahkan underline aktif
    $(document).on('scroll', function () {
        var docScroll = $(document).scrollTop();

        $.each(sectionArray, function (index, value) {
            var offsetTop = $('#section_' + value).offset().top;

            if (docScroll + 1 >= offsetTop) {
                $('.navbar-nav .nav-link').removeClass('active-underline');
                $('.navbar-nav .nav-link').eq(index).addClass('active-underline');
            }
        });
    });

    // Set default active pada nav link pertama
    $('.navbar-nav .nav-link').removeClass('active-underline');
    $('.navbar-nav .nav-link').eq(0).addClass('active-underline');
});

$(document).ready(function () {
    $("[data-detail]").on("click", function () {
        var id = $(this).data('id');
        var eml = "a[href='#" + id + "']";
        $(eml).tab("show")
        setTimeout(function () {
            $('body,html').animate({
                scrollTop: $("#offset_top").offset().top,
            }, 700);
        })
    })
})
$(document).ready(function () {
    $("[data-detail]").on("click", function () {
        var id = $(this).data('id');
        var eml = "a[href='#" + id + "']";
        $(eml).tab("show");
        $('body,html').animate({
            scrollTop: 1100,
        }, 700);
    })
})
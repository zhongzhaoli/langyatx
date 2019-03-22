function aj_(){
    $.ajax({
        url: 'about.html',
        dataType: "jsonp",
        method: "GET",
        data: {},
        success: function(e){
            console.log(e);
        }
    })
}
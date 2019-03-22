window.onload = function(){
    main_fun.get_height();
    main_fun.div_show();
    main_fun.div_status();
}
window.onresize = function(){
    main_fun.get_height();
}
window.onscroll = function(){
    main_fun.div_show();
}
var main_fun = {
    height: 0,
    left: 0,
    width: 0,
    get_height: function(){
        this.top = $("#v-pills-profile-tab").offset().top;
        this.left = $(".container").offset().left;
        this.width = $("#v-pills-tab").get(0).offsetWidth;
    },
    div_show: function(){
        $("#anchor_ul_div").get(0).left = this.left + "px";
        $("#anchor_ul_div").get(0).style.width = this.width - 2 + "px";
        if($("html")[0].scrollTop >= this.top){
            $("#anchor_ul_div").addClass("position-fixed");
        }
        else{
            $("#anchor_ul_div").removeClass("position-fixed");
        }
    },
    div_status: function(){
        $("[aria-controls='v-pills-profile']").on('click', function(){
            $("#anchor_ul").hide();
            $("#anchor_ul2").show();
        })
        $("[aria-controls='v-pills-home']").on('click', function(){
            $("#anchor_ul").show();
            $("#anchor_ul2").hide();
        })
    }
}
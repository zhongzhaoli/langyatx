window.onclick = function(){
    $("audio")[0].play();
}

var img = new Image();
img.onload = function(){
	$(".hide").removeClass("hide");
	var len = $(".base_div img").length;
	for(var i = 0; i < len; i++){
		$(".base_div img")[i].src = "./images/fc_" + parseInt(i + 1) + ".png"
	}
}
img.src = "images/slider1.jpg";
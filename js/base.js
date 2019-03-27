window.onclick = function(){
    $("audio")[0].play();
}

var img = new Image();
img.onload = function(){
	$(".hide").removeClass("hide");
	$(".carousel-img-div")[0].style.backgroundImage = "url("+img.src+")";
}
img.src = "images/slider1.jpg";
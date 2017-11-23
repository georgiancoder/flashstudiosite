
var sliders = $(".slider");

//$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));


if(window.innerWidth < 1025)
{
	//responsive slider
	//alert('aa');
}
else
{
	var interval = window.setInterval(function(){
		slide(postCounter);
	},4000);
}

function slide(counter){
		var slider = sliders[counter];
		var images = $(slider).find("img");
		var sliderBtns = $(slider).find(".sliderBtns");
		var size = images.size();
		if(size > 1)
		{
			$(images[imageCounter]).animate({right: '-300%'},2000);
			$(images[imageCounter+1]).animate({right: '0'},2000,function(){ $(sliderBtns[imageCounter-1]).removeClass("activebtn").addClass("inactivebtn");  $(sliderBtns[imageCounter]).addClass("activebtn"); });
			if(imageCounter < size-1)
			{
				imageCounter++;
			}
			else
			{
				imageCounter = 0;
				$(images[imageCounter]).animate({right: '0'},1000,function(){ $(sliderBtns[size-1]).removeClass("activebtn").addClass("inactivebtn"); $(sliderBtns[imageCounter]).addClass("activebtn"); });
			}
		}
}


$(".sliderBtns").on("click", function(event){
	var index = 0;
	var slider = sliders[postCounter];
	var images = $(slider).find("img");
	var sliderBtns = $(slider).find(".sliderBtns");
	if(window.innerWidth < 1025)
	{
		postCounter = findPostCounter(this) - 1;
		slider = sliders[postCounter];
		images = $(slider).find("img");
		sliderBtns = $(slider).find(".sliderBtns");

		for(i=0; i < sliderBtns.size(); i++)
		{
			if(sliderBtns[i] == this)
				index = i;
		}

		$(sliderBtns).removeClass("activebtn").addClass("inactivebtn");
		$(this).addClass("activebtn");
		$(images).animate({right: '-300%'});
		$(images[index]).animate({right: '0'});
		imageCounter = index;
		//alert(postCounter);
	}
	else
	{

		//alert(postCounter);
		for(i=0; i < sliderBtns.size(); i++)
		{
			if(sliderBtns[i] == this)
				index = i;
		}

		$(sliderBtns).removeClass("activebtn").addClass("inactivebtn");
		$(this).addClass("activebtn");
		$(images).animate({right: '-300%'});
		$(images[index]).animate({right: '0'});
		imageCounter = index;
	}
});


function findPostCounter(btn){
	return $(btn).parent().parent().index()/2;
}

/*function imageOnLeft(){
	var slider = sliders[postCounter];
	var images = $(slider).find("img");
	var currentImage;
	for(i=0; i<images.size(); i++){
		if(parseInt($(images[i]).css('right')) == 0) 
			currentImage = images[i];
	}
	return currentImage;
}*/
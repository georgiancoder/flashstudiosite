var scrolled = 0;
var scrolldir = false;
var postCounter = 0;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
// slider counter
var imageCounter = 0;
var canvas = document.getElementById("mycanvas");
	canvas.width = window.innerWidth + 400;
	canvas.height = window.innerHeight;
var wobbly = new Wobbly(canvas);

	var int;
	var btn = $("#openbtn");
	var homepage = $(".homepage");
	var followtext = $(".follow");
	var siteTitle = $(".siteTitle");
	var logo = $("#logo");
	var aside = $("aside");
	var soc = $(".soc");
	var width = $(window).innerWidth();
	var height = $(window).innerHeight();
	var activePost = $(".activePost");
	var scrollDown = $("#scrollDown");
	var scrollUp = $("#scrollUp");
	var posts = $(".post");
	var sliders = $(".slider");
	var slidernavs = $(".slidernav");
	var left_section = $(".left_section");
	var clickDisabled = false;
	var clickDisabled2 = false;
	var wheelDisabled = false;
$().ready(function(){
	clearInterval(interval);
	wobbly.draw();
	//var int = window.setInterval(function(){ wobbly.animate("left"); }, 10);

	$(left_section[postCounter]).css("top","0");
	$(sliders[postCounter]).css("top","0");

	scrollDown.click(function(){
		if (clickDisabled2)
         return;
		Down();
		clickDisabled2 = true;
     	setTimeout(function(){clickDisabled2 = false;}, 1000);
	});

	scrollUp.click(function(){
		if (clickDisabled2)
         return;
		Up();
		clickDisabled2 = true;
     	setTimeout(function(){clickDisabled2 = false;}, 1000);
	});
 
btn.click(function(e){
	if (clickDisabled)
         return;

		canvas.width = window.innerWidth + 400;
		canvas.height = window.innerHeight; 
		if(parseInt($(homepage).css('right')) == 0)
		{
			clearInterval(int);
			wobbly.frame = 0;
			wobbly.distanseLeft = 200;
			wobbly.distanseRight = 200;
			int = window.setInterval(function(){ wobbly.animate("right"); }, 10);

			$(this).toggleClass("cross");
			if(window.innerWidth < 1025)
			{
				homepage.animate({right: '-100%', zIndex: '-1'},200);
			}
			else
			{
				//interval = window.setInterval(function(){ slide(postCounter); },4000);
				$(".scrollers").fadeIn();
				$("main").fadeIn();
				followtext.fadeIn();
				siteTitle.fadeIn();
				soc.animate({width: '100px', marginLeft: '0px'});
				aside.animate({width: '200px', paddingLeft: '40px'});
				logo.animate({width: '100', height: '69px', left: '0px'});
				homepage.animate({right: -$(window).innerWidth()/2 + 100, zIndex: '-1'},200,function(){ $(".secLeft").fadeOut(); $(".secRight").fadeOut(); $(".rightsec").fadeIn(2000); });
				$(this).animate({left: '30px'});
			}
		}
		else
		{
			clearInterval(int);
			wobbly.frame = 0;
			wobbly.distanseLeft = 200;
			wobbly.distanseRight = 200;
			int = window.setInterval(function(){ wobbly.animate("left"); }, 10);

			$(this).toggleClass("cross");
			clearInterval(interval);
			if(window.innerWidth < 1025)
			{
				$(".scrollers").fadeOut();
				homepage.css('zIndex','300');
				$(".secLeft").fadeIn(); 
				$(".secRight").fadeIn();
				homepage.animate({right: '0'},200);
			}
			else
			{
				$(".rightsec").fadeOut();
				$(".scrollers").fadeOut();
				followtext.fadeOut();
				siteTitle.fadeOut();
				soc.animate({width: '90px', marginLeft: '8px'});
				aside.animate({width: '100px', paddingLeft: '0px'});
				logo.animate({width: '60px', height: '40px', left: '20px'});
				homepage.css({'zIndex':'200','right': -$(window).innerWidth()/2 + 100});
				homepage.animate({right: '0px'},200,function(){ $(".secLeft").fadeIn(); $(".secRight").fadeIn(); });
				$(this).animate({left: '0'});
			}
		}

		clickDisabled = true;
      setTimeout(function(){clickDisabled = false;}, 1000);
	});
});

function resetImages(){
		var slider = sliders[postCounter];
		var sliderBtns = $(slider).find(".sliderBtns");
		var images = $(slider).find("img");
		$(images).css('right','-300%');
		$(images[0]).css('right','0');
		$(sliderBtns).removeClass("activebtn").addClass("inactivebtn");
		$(sliderBtns[0]).addClass("activebtn");
	}

	function Up(){
		imageCounter = 0;
		if(postCounter > 0)
		{	
			postCounter--;
		}
		else
		{
			$(left_section[postCounter]).animate({top: '-100%'});
			$(sliders[postCounter]).animate({top: '100%'});
			postCounter=$(left_section).size()-1;
		}

		//alert(postCounter);
		//left section up
		$(left_section[postCounter]).css('top','100%');
		$(left_section[postCounter]).animate({top: '0'});
		$(left_section[postCounter+1]).animate({top: '-100%'});

		//right section up
		$(sliders[postCounter]).css('top','-100%');
		$(sliders[postCounter]).css('visibility','visible');
		$(sliders[postCounter]).animate({top: '0'});
		$(sliders[postCounter+1]).animate({top: '100%'});
		resetImages();
	}

	function Down(){
		imageCounter = 0;
		if(postCounter < $(left_section).size()-1)
		{
			postCounter++;
		}
		else
		{
			$(left_section[postCounter]).animate({top: '100%'});
			$(sliders[postCounter]).animate({top: '-100%'},function(){ $(this).css('visibility','hidden'); });
			postCounter=0;
		}

		//alert(postCounter);
		//left section down
		$(left_section[postCounter]).css('top','-100%');
		$(left_section[postCounter]).animate({top: '0'});
		$(left_section[postCounter-1]).animate({top: '100%'});

		//right section down
		$(sliders[postCounter]).css('top','100%');
		$(sliders[postCounter]).css('visibility','visible');
		$(sliders[postCounter]).animate({top: '0'});
		$(sliders[postCounter-1]).animate({top: '-100%'});
		resetImages();
	}

$(window).resize(function(){
	if (resizeTimer)
        clearTimeout(resizeTimer);
   var resizeTimer = setTimeout(function(){
   		//clearInterval(interval);
    	canvas.width = window.innerWidth + 400;
    	canvas.height = window.innerHeight;
    	if(window.innerWidth < 1025)
		{
			$(".homepage").css("right","-100%");
			$("#logo").css({"width" : "50px", "height" : "30px", "marginLeft" : "0", "padding" : "0", "left" : "0"});
			$(".siteTitle").css("display","none");
			$("aside").css({"padding" : "10px 0px 20px 5px", "width" : "60px"});
			$("#openbtn").css({"left" : "5px"});
			$(".soc").css({"width":"60px", "padding":"0","margin":"0"});
			$(".scrollers").hide();
			$(".followtext").hide();
			$(".rightsec").hide();
			$(".left_section").css({"top":"0","visibility":"visible"});
			$(".slider").css({"top":"0","visibility":"visible"});
			window.removeEventListener("wheel",detectwheel,false);
		}
		else
		{
			postCounter = 0;
			imageCounter = 0;
			var images = sliders[postCounter];
			$(images[imageCounter]).css('right','0');
			$("#logo").css({"width" : "100px", "height" : "69px"});
			$(".siteTitle").css("display","block");
			$("aside").css({"padding" : "20px 0px 20px 40px", "width" : "200px"});
			$(".homepage").css({"right" : "-100%", "height" : "100%"});
			$(".soc").css({"width":"90px", "padding":"0","margin":"0"});
			$(".scrollers").show();
			$(".rightsec").show();
			$(".left_section").css('top','-100%');
			$($(".left_section")[0]).css('top','0');
			$(".slider").css('top','100%');
			$($(".slider")[0]).css('top','0');
			wobbly.width = window.innerWidth + 400;
    		wobbly.height = window.innerHeight;
			//clearInterval(interval);
			//interval = window.setInterval(function(){ slide(postCounter); },4000);
			$(btn).removeClass("cross");
			window.addEventListener("wheel",detectwheel,false);
		}
    }, 500);
});

	if (window.innerWidth > 1025) {
		
		window.addEventListener("wheel",detectwheel,false);
	}
	else
	{
		clearInterval(scrollinterval);
	}

	function detectwheel(e){
		if (wheelDisabled)
         return;
		if(e.wheelDelta > 0)
			scrolldir = "up";
		else
			scrolldir = "down";

		if(scrolldir == "up")
			Up();
		else
			Down();

		wheelDisabled = true;
     	setTimeout(function(){wheelDisabled = false;}, 1000);
	}
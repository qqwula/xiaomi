$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()<=100){
			$("#scrollUp").hide();
		}else{
			$("#scrollUp").show();
		}
	})
	$("#scrollUp").click(function(){
		$("html,body").animate({scrollTop:0},300);
	});

	$(".home-hero-slider .site-category ul li").hover(function(){
		$(this).css({"background-color":"#ff6700"});
		$(this).find(".children").show();
	},function(){
		$(this).find(".children").hide();
		$(this).css({"background-color":""});
	});



    /*$(".site-header .navbar ul li").hover(function(){
    	 idx = $(this).index(".site-header .navbar ul li");

    	$(".site-header .J_navMenu ul").eq(idx).show();
		$(".site-header .J_navMenu ul").not($(".site-header .J_navMenu ul").eq(idx)).hide();
	},function(){
		$(".site-header .J_navMenu ul").hide();
	});*/
 

    
	$('.homeelec .box-bd .box-bd-item').hover(function(){
		$('.review-wrapper',this).stop().animate({
			height:'72px'
		});
	},function(){
		$('.review-wrapper',this).stop().animate({
			height:'0px'
		});
	});

	$("#sjdx").click(function(){
		fb = $(this).parent().parent();
		fb.hide();
		$(".fb2").show();
	})

	$("#up").click(function(){
		fb = $(this).parent().parent();
		fb.hide();
		$(".fb1").show();
	})

});
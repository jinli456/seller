$(function(){
	//导航选项卡
	$(".zx_sold_title").click(function(){
		$(".zx_sold_title").removeClass("zx_borde_top");
		$(this).addClass("zx_borde_top");
		
	})
	//当多个商品的时候在同一个店铺里面时，控制右边文字的垂直居中
	$(".zx_trading_more_content").each(function(){
		var Wheight=$(this).height();
		var line_length=$(this).children().children(".zx_trading_more_content_left_one").length;
		var fixed_height=106;
		$(this).children(".zx_trading_more_content_right")[0].style.height=Wheight+"px";
		$(this).children(".zx_trading_more_content_right")[0].style.lineHeight=Wheight+"px";
		$(this).children().children(".zx_trading_more_content_left_line")[0].style.height=line_length*fixed_height+"px";
	})
})

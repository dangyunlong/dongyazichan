!function(){
	$(function(){
		//loadingbar 页面执行时先执行到95%
		//$("#bar").animate({"width":"95%"},1000)
		//nav
		$("#nav-main>li").on("mouseenter",function(){
			$("#nav-main>li a").removeClass("mainColor");
			var num=$(this).attr("data-num");
			$(this).children("a").addClass("mainColor");
			$("#navLine").stop().animate({"left":105*num},300)
			$(this).find("ul").stop(true,true).slideDown()
		}).on("mouseleave",function(){
			$(this).find("ul").stop(true,true).slideUp()
		})
	})
	$(window).load(function(){
		//页面加载完毕以后 再执行到100%
		$("#bar").animate({"width":"100%"},1000)
	});
}();

window.mobileCheck = function(){
	return $(window).width()<=mobileThreshold;
}

window.mobileThreshold=700;

$(document).ready(function(){

	var s=1;

	var menuIsOpen=false;
	$(".menu-button").click(function(){
		toggleMenu();
	});
	function toggleMenu(){
		if(menuIsOpen){
			closeMenu();
		}else{
			openMenu();
		}
	}
	function openMenu(){
		menuIsOpen=true;
		var wh=$(window).height();
		$(".menu,.menu-button").addClass("menu-is-open");

		$(".menu").css({
			transform:"translate(0,"+(-wh)+"px)"
		}).transition({y:0,duration:400});
		var links=$(".menu-link:not(.mobile-hide)");
		links.each(function(i){
			$(this).css({
				transform:"translate(0,"+(-wh)+"px)"
			}).transition({y:0,duration:400+(70*(links.length-i))});
		})
	}
	function closeMenu(){
		menuIsOpen=false;
		var wh=$(window).height();
		$(".menu-button").removeClass("menu-is-open");

		$(".menu").transition({y:-wh,duration:250,easing:"easeInQuad"},function(){
			$(".menu").removeClass("menu-is-open");
		});
	}
	$(".menu-link a").click(function(){
		if(mobileCheck()){
			closeMenu();
		}
	})
})
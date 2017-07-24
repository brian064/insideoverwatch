$(document).ready(main);

function main() {
	
	
	
	
	
	$(".defense").css({"opacity" : "0"})
	$(".tank").css({"opacity" : "0"})
	$(".support").css({"opacity" : "0"})
	$(".group1").hide();
	$(".group2").hide();
	$(".group3").hide();
	$(".group4").hide();
	
	$(".offenseMob").click(function() {
		$(".group1").slideToggle(300);
		$(".group2").slideUp(300);
		$(".group3").slideUp(300);
		$(".group3").slideUp(300);
	})
	
	$(".defenseMob").click(function() {
		$(".group2").slideToggle(300);
		$(".group1").slideUp(300);
		$(".group3").slideUp(300);
		$(".group4").slideUp(300);
	})
	
	$(".tankMob").click(function() {
		$(".group3").slideToggle(300);
		$(".group1").slideUp(300);
		$(".group2").slideUp(300);
		$(".group4").slideUp(300);
	})
	
	$(".supportMob").click(function() {
		$(".group4").slideToggle(300);
		$(".group1").slideUp(300);
		$(".group2").slideUp(300);
		$(".group3").slideUp(300);
	})
	
	$(".tab").on("click", function(){
		$(".offense").css({"opacity" : "1"})
		$(".defense").css({"opacity" : "0"})
		$(".defense").css({"z-index" : "0"})
		$(".tank").css({"opacity" : "0"})
		$(".tank").css({"z-index" : "0"})
		$(".support").css({"opacity" : "0"})
		$(".support").css({"z-index" : "0"})
	});
	
	$(".tab2").on("click", function(){
		$(".defense").css({"opacity" : "1"})
		$(".defense").css({"z-index" : "3"})
		$(".offense").css({"opacity" : "0"})
		$(".offense").css({"z-index" : "0"})
		$(".tank").css({"opacity" : "0"})
		$(".tank").css({"z-index" : "0"})
		$(".support").css({"opacity" : "0"})
		$(".support").css({"z-index" : "0"})
	});
	
	$(".tab3").on("click", function(){
		$(".tank").css({"opacity" : "1"})
		$(".tank").css({"z-index" : "3"})
		$(".offense").css({"opacity" : "0"})
		$(".offense").css({"z-index" : "0"})
		$(".defense").css({"opacity" : "0"})
		$(".defense").css({"z-index" : "0"})
	});
	
	$(".tab4").on("click", function(){
		$(".support").css({"opacity" : "1"})
		$(".support").css({"z-index" : "3"})
		$(".offense").css({"opacity" : "0"})
		$(".offense").css({"z-index" : "0"})
		$(".defense").css({"opacity" : "0"})
		$(".defense").css({"z-index" : "0"})
		$(".tank").css({"opacity" : "0"})
		$(".tank").css({"z-index" : "0"})
	});
	
	var imgHeight = $(".imageHolder").width();
	
	$(".imageHolder").css({"height" : imgHeight})
	
	// adjust size of thumbnails
	$(window).resize(function() {
		imgHeight = $(".imageHolder").width();
		$(".imageHolder").css({"height" : imgHeight})
	});
	
	var footerHeight = $(".offense").height();
	
	$(".footer").css({
		"height" : footerHeight
	})
	
	$(window).resize(function() {
		
		footerHeight = $(".offense").height();
	
		$(".footer").css({
			"height" : footerHeight
		})
	
	});
	
	//for sidebar
	
	$(".hamburger").click(function() {
		$(".sideBar").toggleClass("sideBarVisible")
	})
	
	$(".closeBtn").click(function() {
		$(".sideBar").toggleClass("sideBarVisible")
	})
	
}
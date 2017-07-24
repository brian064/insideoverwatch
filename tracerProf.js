$(document).ready(main);

function main() {
	
	$(".heroImage").hide();
	$(".heroImage").slideDown(1000);
	
	
	//for sidebar
	
	$(".hamburger").click(function() {
		$(".sideBar").toggleClass("sideBarVisible")
	})
	
	$(".closeBtn").click(function() {
		$(".sideBar").toggleClass("sideBarVisible")
	})
	
}
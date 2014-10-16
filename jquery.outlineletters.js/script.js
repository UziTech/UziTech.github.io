$(document).on("flatdoc:ready", function(){
	$(".content img").remove();
	$("#example1").html("Example 1").css({color: "#00f"}).outlineLetters();
	$("#example2").html("Example 2").css({color: "#f00"}).outlineLetters({color: '#0ff'});
	$("#example3").html("Example 3").css({color: "#0f0"}).outlineLetters({size: 5});
	$("#example4").html("Example 4").css({color: "#f00"}).outlineLetters({color: '#0ff', size: 2});
	$("#example5").html("Example 5").css({color: "#0f0"}).outlineLetters({size: 5, useTextShadow: false});
	$("#example6").html("Example 6").css({color: "#0f0"}).outlineLetters({size: 5, round: false});
	$(window).resize(function(){
		if($("#example1").css("float") === "none"){
			$("#example5").css({left: 0});
		} else {
			$("#example5").css({left: 40});
		}
	}).resize();
});
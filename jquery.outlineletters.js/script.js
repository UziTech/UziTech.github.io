$(document).on("flatdoc:ready", function(){
	$("#example1").text("Example 1").css({color: "#00f"}).outlineLetters();
	$("#example2").text("Example 2").css({color: "#f00"}).outlineLetters({color: '#0ff'});
	$("#example3").text("Example 3").css({color: "#0f0"}).outlineLetters({size: 5});
	$("#example4").text("Example 4").css({color: "#f00"}).outlineLetters({color: '#0ff', size: 2});
	$("#example5").text("Example 5").css({color: "#0f0"}).outlineLetters({size: 5, useTextShadow: false});
	$("#example6").text("Example 6").css({color: "#0f0"}).outlineLetters({size: 5, round: false});
});
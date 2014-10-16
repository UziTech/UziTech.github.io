$(document).on("flatdoc:ready", function(){
	$("#example1").text("Example 1").outlineLetters();
	$("#example2").text("Example 2").outlineLetters({color: '#0ff'});
	$("#example3").text("Example 3").outlineLetters({size: 5});
	$("#example4").text("Example 4").outlineLetters({color: '#0ff', size: 2});
	$("#example5").text("Example 5").outlineLetters({size: 5, useTextShadow: false});
	$("#example6").text("Example 6").outlineLetters({size: 5, round: false});
});
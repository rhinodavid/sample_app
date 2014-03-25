/*
#Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
*/
//= require pluralize.js

$(document).ready(function() {
	$("#micropost_content").bind("keyup paste", function(e) {
		var chars_remaining = 154 - $("#micropost_content").val().length;
		var char_display = $("em.char_remaining");
		var plur = owl.pluralize("character", chars_remaining);
		char_display.html(chars_remaining + " " + plur);
		var char_advisory = $("span.char_advisory");
		var express_yaself = $("span#express_yaself");
		express_yaself.addClass("under_limit");
		if (chars_remaining > 0) {
			char_advisory.addClass("under_limit");
			char_advisory.removeClass("over_limit");
		} else {
			char_advisory.addClass("over_limit");
			char_advisory.removeClass("under_limit");
		}
		if ((chars_remaining >0) && (chars_remaining < 14)) {
			char_advisory.hide();
			express_yaself.html("Expressin yaself!!");
			express_yaself.fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
		} else {
			char_advisory.show();
			express_yaself.html("");
			express_yaself.stop();
		}
	});
});
var c_pressed=false;
var r_pressed=false;
var e_pressed=false;
var a_pressed=false;
var t_pressed=false;
var o_pressed=false;
var r0_pressed=false;
document.onkeypress=function(e) {
	var e = window.event || e;
	e = String.fromCharCode(e.charCode)
	switch (e) {
		case "c":
			c_pressed=true;
			break;
		case "r":
			if (c_pressed && r_pressed && e_pressed && a_pressed && t_pressed && o_pressed) {
				alert("all hail ryan, the mighty creator!!");
				allFalse();
			}
			else if (c_pressed) {
				r_pressed = true;
			} else {
				allFalse();
			}
			break;
		case "e":
			if (c_pressed && r_pressed) {
				e_pressed = true;
			} else {
				allFalse();
			}
			break;
		case "a":
			if (c_pressed && r_pressed && e_pressed) {
				a_pressed = true;
			} else {
				allFalse();
			}
			break;
		case "t":
			if (c_pressed && r_pressed && e_pressed && a_pressed) {
				t_pressed = true;
			} else {
				allFalse();
			}
			break;
		case "o":
			if (c_pressed && r_pressed && e_pressed && a_pressed && t_pressed) {
				o_pressed = true;
			} else {
				allFalse();
			}
			break;
		default:
			allFalse();
	}
}
function allFalse() {
	c_pressed=false;
	r_pressed=false;
	e_pressed=false;
	a_pressed=false;
	t_pressed=false;
	o_pressed=false;
	r0_pressed=false;
}

var showDest = function(destNum) {
	var destName = "#" + destNum + "_dest";
	$(".dest").hide();
	$(destName).show();
};

$(document).ready(function() {
	$(".short_description").hide();
	$(".dest").hide();
	$(".hoverable").hover(function() {
		$(this).find("img").animate({"opacity":".45"}, 100);
		$(this).find(".short_description").show();
	},
	function() {
		$(this).find("img").animate({"opacity":"1"}, 100);
		$(this).find(".short_description").hide();
	});

	$(".hoverable").click(function() {
        var destNum = $(this).attr("id");
        showDest(destNum);
	});

	$(".activity_item").click(function() {
		$(".arrow").css("-webkit-filter", "invert(0)");
		$(this).find(".arrow").css("-webkit-filter", "invert(1)");
		var destNum = $(this).attr("id");
		showDest(destNum);
	});
});

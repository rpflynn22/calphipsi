var SHOW_TIME = 10000

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

$(document).ready(function() {
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .slideToggle()
	    .next()
	    .delay(600)
	    .slideToggle()
	    .end()
	    .appendTo('#slideshow');
	},  SHOW_TIME);
});
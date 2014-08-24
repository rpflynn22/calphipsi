var one_selected = false;

$(document).ready(function() {
	$(".dest").hide();
	$(".information_div").hide();
	$("#rush_phi_psi").show();
	$(".selection_bar_option").click(function() {
		$(".selection_bar_option").css("text-decoration", "none");
		$(this).css("text-decoration", "underline");
		var id = $(this).attr('id');
		if (id==="selection_bar_left") {
			$(".information_div").hide();
			$("#rush_contacts_content").fadeIn();
		} else if (id==="selection_bar_right") {
			$(".information_div").hide();
			$("#horizontal_activity_div").fadeIn();

		}
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

var showDest = function(destNum) {
	var destName = "#" + destNum + "_dest";
	$(".dest").hide();
	$(destName).show();
};
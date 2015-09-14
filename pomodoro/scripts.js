$(document).ready(function() {
	var isClicked = false;

	setInterval(function() {

		function rotate(element, degrees) {
			element.setAttribute('transform', 'rotate(' + degrees + ' 50 50)');
		}

		var date = new Date();
		rotate(minute, 6 * (date.getMinutes() + date.getSeconds() / 60));
		rotate(hour, 30 * (date.getHours() % 12 + date.getMinutes() / 60));
	}, 1000);

	$(".face").click(function() {
		if (!isClicked) {
			//start the clock
			isClicked = true;
			$(".face").css("cursor", "initial");
		}
	});
});
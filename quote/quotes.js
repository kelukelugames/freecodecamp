
$(document).ready(function() {
	quoteArray = [
	"You are on the cusp of being a senior developer. We will promote you in no time.",
	"We don't negotiate.",
	"I can't answer that because of legal reasons.",
	"The entire team is made of rock star devs",
	"I'm hiring and thought that you would be a good fit for the position that I'm trying to fill - details below. Let me know whether you're interested in discussing this opportunity. If you aren't but know someone who is, I'd love a referral!"];

	document.getElementById("quote").innerHTML = quoteArray[Math.floor(Math.random() * quoteArray.length)];

	$("button").on("click", function() {
		document.getElementById("quote").innerHTML = quoteArray[Math.floor(Math.random() * quoteArray.length)];
	});
});
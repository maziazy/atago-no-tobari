
function initial() {
	gacya.initial();
	
	// event
	document.getElementById("goldGacya").onclick = function() {
		var hime = gacya.gacya();
		var message = hime.name + ' (' + hime.gacyaChance + '%)'; 
		
		document.getElementById("message").textContent = message;
	};
}

window.onload = initial;
var _IMG_PATH = "./assets/images/hime/"

function initial() {
	gacya.initial();
	gacya.bannerToggled = 0;
	
	// event
	$("#goldGacya").bind("click", function() {
		var hime = gacya.gacya();
		var message = hime.name + ' (' + hime.gacyaChance + '%)';
		var bannerSelector	= (gacya.bannerToggled)? "#banner .front": "#banner .back";
		var bannerPath		= _IMG_PATH + hime.banner + '.png';
		
		// Toggle banner after image is loaded
		var bannerImage = new Image();
		$(bannerSelector).css("background-image", 'url('+bannerPath+')');
		bannerImage.onload = function() {
			gacya.bannerToggled = !gacya.bannerToggled;
			$("#gacya .message").text(message);
			$("#banner").toggleClass("flipped");
		};
		bannerImage.src = bannerPath;
	});
}

window.onload = initial;
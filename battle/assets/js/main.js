var _IMG_PATH = "./assets/images/hime/"

function getBannerPath(name) {
	return _IMG_PATH + name + ".png";
}
function getBannerUrl(name) {
	return "url(" + _IMG_PATH + name + ".png)";
}

var battle, qq;

function initial() {
	data.initial();
	
	battle = new Battle();
	battle.enemy.addUnit(data.himes[0]);
	battle.enemy.addUnit(data.himes[2]);
	var atago = battle.addPlayer("Atago");
	atago.addUnit(data.himes[4]);
	atago.addUnit(data.himes[5]);
	qq = atago.addUnit(data.himes[2]);
	
	
	//battle.begin();
}

window.onload = initial;
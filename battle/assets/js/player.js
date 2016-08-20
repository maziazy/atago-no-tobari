function Player(name, role) {
	this.name = name;
	this.role = role;
	this.units = [];
}
var a;
Player.prototype.addUnit = function(baseunit) {
	var unit = new Unit(baseunit, this);
	
	// UI
	if(this.role == "enemy") {
		unit.ui = ui.addEnemyUnit(unit.id);
		unit.ui.style.backgroundImage = getBannerUrl(unit.base.banner);
		unit.ui.$(".hp").max = unit.base.hp;
		unit.ui.$(".hp").value = unit.hp;
		unit.ui.$(".mp").max = unit.base.mp;
		unit.ui.$(".mp").value = unit.mp;
	} else if(this.role == "player") {
		unit.ui = ui.addPlayerUnit(unit.id);
		unit.ui.style.backgroundImage = getBannerUrl(unit.base.banner);
		unit.ui.$(".hp").max = unit.base.hp;
		unit.ui.$(".hp").value = unit.hp;
		unit.ui.$(".mp").max = unit.base.mp;
		unit.ui.$(".mp").value = unit.mp;
	}
	
	this.units.push(unit);
	return unit;
}

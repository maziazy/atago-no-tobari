function Battle() {
	this.players = [];
	this.units = [];
	
	this.enemy = new Player("Enemy", "enemy");
}

Battle.prototype.addPlayer = function(name) {
	var player = new Player(name, "player");
	
	this.players.push(player);
	return player;
};

/* Script */
Battle.prototype.begin = function() {
	// bulid unit list
	this.units = this.units.concat(this.enemy.units);
	for(var key in this.players) {
		var player = this.players[key];
		this.units = this.units.concat(player.units);
	}
	
	// start timer
	for(var key in this.units) {
		var unit = this.units[key];
		
		// prepare for next move
		unit.prepare(battle);
	}
};

Battle.prototype.getTarget = function(role) {
	for(var key in this.units) {
		var unit = this.units[key];
		if(unit.owner.role == role && unit.hp > 0)
			return unit;
	}
	
	return 0;
};
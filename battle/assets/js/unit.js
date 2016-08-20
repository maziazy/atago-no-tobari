function Unit(base, owner) {
	if ( typeof Unit.id == 'undefined' ) {
        Unit.id = 0;
    }
	
	this.id = Unit.id++;
	this.base = base;
	this.owner = owner;
	
	this.name = this.base.name;
	this.fainted = false;
	this.hp = this.base.hp;
	this.mp = this.base.mp;
	this.cd = (2000 - (this.base.agi*20))*1.5;
	this.nextMove = {
		"skill": 0,
		"target": 0
	};
}

Unit.prototype.refreshUI = function() {
	if(typeof(this.ui) == 'undefined')
		return
	this.ui.$('.hp').value = this.hp;
	this.ui.$('.mp').value = this.mp;
}
Unit.prototype.resetProgressUI = function() {
	if(typeof(this.ui) == 'undefined')
		return
	this.ui.$('.progress').classList.remove("finished");
	// reset animation
	void this.ui.$('.progress').offsetWidth;
	this.ui.$('.progress').style.transitionDuration = (this.cd/1000)+'s';
	this.ui.$('.progress').classList.add("finished");
}

/* Variable handler */
Unit.prototype._addHP = function(num) {
	var quota = this.base.hp - this.hp;
	num = Math.min(num, quota);
	this.hp += num;
	
	this.refreshUI();
	return num;
}
Unit.prototype._subHP = function(num) {
	var quota = this.hp - 0;
	num = Math.min(num, quota);
	this.hp -= num;
	
	this.refreshUI();
	return num;
}
Unit.prototype._addMP = function(num) {
	var quota = this.base.mp - this.mp;
	num = Math.min(num, quota);
	this.mp += num;
	
	this.refreshUI();
	return num;
}
Unit.prototype._subMP = function(num) {
	var quota = this.mp - 0;
	num = Math.min(num, quota);
	this.mp -= num;
	
	this.refreshUI();
	return num;
}

Unit.prototype.subHP = function(num) {
	var damage = this._subHP(num);
	if(this.hp <= 0)
		this.faint();
}

Unit.prototype.faint = function() {
	this.fainted = true;
	clearTimeout(this.timer);
	console.log(this.name+" faint.");
}

/* Script */
Unit.prototype.action = function(battle) {
	var nextMove = this.nextMove;
	if(nextMove.target == 0) {
		if(this.owner.role == "enemy")
			nextMove.target = battle.getTarget("player");
		else if(this.owner.role == "player")
			nextMove.target = battle.getTarget("enemy");
		else
			console.error("Unit.action(): Player has unhandled owner role");
	}
	
	nextMove.skill.cast(this, nextMove.target);
	
	// prepare for next move
	this.prepare(battle);
}
Unit.prototype.prepare = function(battle) {
	this.nextMove.skill = this.base.attack;
	this.nextMove.target = 0;
	
	// reset progress animation
	this.resetProgressUI();
	
	if(this.fainted)
		return;
	
	this.timer = setTimeout(function(unit, battle) {
		unit.action(battle);
	}, this.cd, this, battle);
}
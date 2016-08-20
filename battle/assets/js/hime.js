function Hime(json) {
	BaseUnit.call(this, json);
	
	this.chance = json.chance;
	this.banner = json.banner;
}

Hime.prototype = Object.create(BaseUnit.prototype);
Hime.prototype.constructor = Hime;
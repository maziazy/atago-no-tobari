function Skill(json) {
	this.name = json.name;
	this.atts = new Attributes();
	
	for(var i = 1; i <= 3; i++) {
		var type = json['type'+i];
		var mul	 = json['multiplier'+i];
		
		if(typeof(type) == 'undefined')
			continue;
		
		this.atts[type] = mul;
	}
}

Skill.prototype.cast = function(caster, target) {
	var atk = caster.base.atkatts.productSum(this.atts)*2;
	var def = target.base.defatts.productSum(this.atts.topping());
	var damage = atk-def;
	
	target.subHP(damage);
	console.log(caster.name+" cast "+this.name+" on "+target.name+" with "+damage+" damages.");
	return damage;
};
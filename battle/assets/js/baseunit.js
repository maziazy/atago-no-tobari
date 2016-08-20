function BaseUnit(json) {
	this.name = json.name;
	
	this.hp = json.hp;
	this.mp = json.mp;
	this.str = json.str;
	this.int = json.int;
	this.agi = json.agi;
	this.dex = json.dex;
	this.spr = json.spr;
	this.atkatts = new Attributes();
	this.atkatts.blow	= json.atkblow;
	this.atkatts.slash	= json.atkslash;
	this.atkatts.pierce	= json.atkpierce;
	this.atkatts.fire	= json.atkfire;
	this.atkatts.water	= json.atkwater;
	this.atkatts.wind	= json.atkwind;
	this.atkatts.holy	= json.atkholy;
	this.atkatts.shadow	= json.atkshadow;
	this.defatts = new Attributes();
	this.defatts.blow	= json.defblow;
	this.defatts.slash	= json.defslash;
	this.defatts.pierce	= json.defpierce;
	this.defatts.fire	= json.deffire;
	this.defatts.water	= json.defwater;
	this.defatts.wind	= json.defwind;
	this.defatts.holy	= json.defholy;
	this.defatts.shadow	= json.defshadow;
	
	this.skills = [];
	this.attack = data.skills[0];
}
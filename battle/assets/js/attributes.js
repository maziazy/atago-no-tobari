function Attributes() {
	this.blow	= 0;
	this.slash	= 0;
	this.pierce	= 0;
	this.fire	= 0;
	this.water	= 0;
	this.wind	= 0;
	this.holy	= 0;
	this.shadow	= 0;
}

Attributes.prototype.productSum = function(mul) {
	var sum = 0;
	sum += this.blow	* mul.blow;
	sum += this.slash	* mul.slash;
	sum += this.pierce	* mul.pierce;
	sum += this.fire	* mul.fire;
	sum += this.water	* mul.water;
	sum += this.wind	* mul.wind;
	sum += this.holy	* mul.holy;
	sum += this.shadow	* mul.shadow;
	
	return sum;
};

Attributes.prototype.topping = function() {
	var result = new Attributes;
	result.blow		= (this.blow)? 1: 0;
	result.slash	= (this.slash)? 1: 0;
	result.pierce	= (this.pierce)? 1: 0;
	result.fire		= (this.fire)? 1: 0;
	result.water	= (this.water)? 1: 0;
	result.wind		= (this.wind)? 1: 0;
	result.holy		= (this.holy)? 1: 0;
	result.shadow	= (this.shadow)? 1: 0;
	
	return result;
};
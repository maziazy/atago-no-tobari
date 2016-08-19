function Hime(name, chance) {
	this.name = name;
	this.gacyaChance = chance;
}

var gacya = {
	initial: function() {
		// load Himes
		var rawhimes = getHimelist();
		
		this.himes = [];
		for(var key in rawhimes) {
			var rawhime = rawhimes[key];
			var newhime = new Hime(rawhime.name, rawhime.chance);
			this.himes.push(newhime);
		}
		
		// generate gacya list
		this.list = [];
		this.totalChance = 0;
		for(var key in this.himes) {
			var hime = this.himes[key];
			
			if(hime.gacyaChance > 0) {
				this.list.push(hime);
				this.totalChance += hime.gacyaChance;
			}
		}
	
		if(this.totalCHance <= 0)
			console.error("[gacya] Sum of gacya chance <= 0");
	},
	
	gacya: function() {
		var num = Math.random()*this.totalChance;
		
		for(var key in this.list) {
			var hime = this.list[key];
			
			if((num -= hime.gacyaChance) <= 0)
				return hime;
		}
		
		console.error("[gacya] Gacya fail, the random gone worng.");
		return 0;
	}
};
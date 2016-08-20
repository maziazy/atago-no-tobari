var data = {
	initial: function() {
		// load Skills		
		this.skills = [];
		for(var key in __DATA_SKILLS) {
			var skill = new Skill(__DATA_SKILLS[key])
			
			this.skills.push(skill);
		}
		
		// load Himes		
		this.himes = [];
		for(var key in __DATA_HIMES) {
			var hime = new Hime(__DATA_HIMES[key])
			
			this.himes.push(hime);
		}
	}
};
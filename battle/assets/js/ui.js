var ui = {
	"addPlayerUnit": function(id) {
		var unit_t = document.$("#unit_t");
		unit_t.content.querySelector('.unit').id = "unit-"+id;
				
		var unit_o = document.importNode(unit_t.content, true);
		document.$("#playerUnits").appendChild(unit_o);
		
		return document.$("#unit-"+id);
	},
	"addEnemyUnit": function(id) {
		var unit_t = document.$("#unit_t");
		unit_t.content.querySelector('.unit').id = "unit-"+id;
				
		var unit_o = document.importNode(unit_t.content, true);
		document.$("#enemyUnits").appendChild(unit_o);
		
		return document.$("#unit-"+id);
	}
};
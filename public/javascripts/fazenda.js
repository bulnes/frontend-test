function Fazenda(data) {
	var dados = data,
		_lista,
		_ordena;
	
	_lista = function() {		
		var template,
			output,
			items = {'people': []};
		
		for (var i = 0; i < dados.length; i++) {
			var dado = dados[i],
				total,
				perPositive,
				perNegative;
			
			dado.positive = parseInt(dado.positive) || 0;
			dado.negative = parseInt(dado.negative) || 0;
			
			total = dado.positive + dado.negative;
			perPositive = Math.round(dado.positive * 100 / total) || 0;
			perNegative = Math.round(dado.negative * 100 / total) || 0;
			
			items.people.push({
				'position': i + 1,
				'picture': dado.picture,
				'name': dado.name,
				'description': dado.description,
				'like': perPositive,
				'dislike': perNegative,
			});
		}
		
		return items;
	};
	
	_ordena = function() {
		dados.sort(function(a, b) {
			a.positive = parseInt(a.positive) || 0;
			b.positive = parseInt(b.positive) || 0;
			
			return b.positive - a.positive;
		});
		return dados;
	};
	
	return {
		'lista': _lista,
		'ordena': _ordena
	}
};
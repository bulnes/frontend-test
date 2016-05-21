window.onload = function() {
	var fazenda,
		dadosFazenda,
		xhr;
	
	var xhr = new XHRequest();
	xhr.request("GET", "fazenda.json", true, function(xhttp) {
		var retorno = xhttp.responseText;
		if (retorno == "" || dadosFazenda != null)
			return;
		
		try {
			dadosFazenda = (JSON.parse(retorno))["data"] || [];
			
			fazenda = new Fazenda(dadosFazenda);
			fazenda.ordena();
			
			var items = fazenda.lista();
			var template = document.getElementById('people').innerHTML;
			var output = Mustache.render(template, items);
			
			document.getElementById("list-of-people").innerHTML = output;
		} catch(e) {
			console.log(e);
		}
	});
};
function XHRequest() {
	
	var request = function(type, target, async, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback(xhttp);
			}
		};
		xhttp.open(type, target, async);
		xhttp.send();
	};
	
	return {
		'request': request
	}
};
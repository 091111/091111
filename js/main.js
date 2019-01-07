$(document).ready(function(){
	getToken();
});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function getToken(){
	var urlcode = getUrlVars()["code"];
	alert(urlcode);

	$.ajax("https://apis.jins.com/meme/v1/oauth/token", {
		type: "POST",
		Content-Type: "application/x-www-form-urlencoded",
		body: { 
			"grant_type": "authorization_code",
			"code": urlcode,
			"redirect_uri": "https://091111.github.io/index.html",
			"client_id": "793384252606287",
			"client_secret": "uobinmueqiohlkcvyxby3unmyli4u1wa"
		},
		success: function(){
			alert("success");
		},
		error: function(){
			alert("error");
		}
	});
}

/*function getTokenTest() {
	var urlcode = getUrlVars()["code"];
	alert(urlcode);

	var request = new XMLHttpRequest();
	var params = 'grant_type: authorization_code, code:' + urlcode + ', redirect_uri: http://tipporn.com/main.html, client_id: 793384252606287, client_secret: uobinmueqiohlkcvyxby3unmyli4u1wa';
	request.open('POST', 'https://apis.jins.com/meme/v1/oauth/token', true);
	request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			alert("ok");
		}
	}
	request.send(params);
}*/

$(document).ready(function(){
	$("#btnLogin").click(memelogin);
});

function memelogin(){
	window.open('https://accounts.jins.com/jp/ja/oauth/authorize?response_type=code&client_id=793384252606287&redirect_uri=https://091111.github.io/main.php&state=jshcu5tqhs&scope=office&service_id=meme&login_hint=nb15505@shibaura-it.ac.jp');
} 

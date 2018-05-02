console.log(getDevice());
console.log('ta aqui');

let stateCheck = setInterval(() => {
	if (document.readyState === 'complete') {
		console.log(getPageType());
		console.log(getPageSize());
		console.log(searchAdTags());
		clearInterval(stateCheck);
	}
}, 100);

//get the user device
function getDevice(){
	//Check which is the user device
	if(navigator.userAgent.match(/Android/i)){
		return 'Mobile android';
	}else if(navigator.userAgent.match(/webOS/i)){
		return 'Mobile WebOS';
	}else if(navigator.userAgent.match(/iPhone/i)){
		return 'Mobile iPhone';
	}else if(navigator.userAgent.match(/iPad/i)){
		return 'Tablet iPad';
	}else if(navigator.userAgent.match(/iPod/i)){
		return 'Mobile iPod';
	}else if(navigator.userAgent.match(/BlackBerry/i)){
		return 'Mobile BlackBerry';
	}else if(navigator.userAgent.match(/Windows Phone/i)){
		return 'Mobile Windows Phone';
	}else if(window.innerWidth > 1024){
		return 'Desktop';
	}else{
		return 'Mobile';
	}
}

//Get the current page size. Works AFTER the page load.
function getPageSize(){
	var body = document.body,
    html = document.documentElement;

	//Get WINDOW SIZE
		//var that alocates the window width
		var windowWidth = window.innerWidth;
		//var that alocates the window height
		var windowHeight = window.innerHeight;

	//Get PAGE sizes
		//var that alocates the page width
	var pageHeight = Math.max(body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight);
		//var that alocates the page height
		
	return windowWidth + 'x' + pageHeight;
}

//Get the page type (Home, Archive or Single post). Works AFTER the page load.
function getPageType(){
	if(document.body.classList.contains('home')){
		return 'Home';
	}else if(document.body.classList.contains('archive')){
		return 'Capa/Categoria';
	}else if(document.body.classList.contains('single')){
		return 'Interna';
	}else{
		return 'Não definida';
	}
}

//Set a cookie into the site
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie += cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Get the site cookies
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

//Search Ad tags. Works AFTER the page load.
function searchAdTags(){
	try {
		//get all iframes elements on the document and put it into a var.
		var tagIframe = document.getElementsByTagName('iframe');

		//Check if has any iframe element on the document.
		if(tagIframe != null){
			//Returns how much iframes has on the document.
			return tagIframe.length;
		}

	} catch(e) {
		//Return the exception.	
		return e;
	}
}

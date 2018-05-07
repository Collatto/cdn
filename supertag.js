console.log(getDevice());

/**
	* @author Leonardo Collatto
	* @Descrition check if the state of the document its 'complete' and run the code.
*/
let stateCheck = setInterval(() => {
	if (document.readyState === 'complete') {
		console.log(getPageType());
		console.log(getPageSize());
		console.log('AD tags: ' + searchAdTags());
		console.log(searchAdman());
		console.log(searchTail());
		console.log(searchSmartClip());
		//console.log('RevContent tags: ' + searchRevContent());
		clearInterval(stateCheck);
	}
}, 100);

/**
	* @author Leonardo Collatto
	* @Descrition identify which is the current device of the user.
	* @returns {string} return the name of the current device. 
*/
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

/**
	* @author Leonardo Collatto
	* @Descrition Identify the width and height of the page to the user device.
	* @returns {string} return the page size. ex.: 1440x8000 (window width and page height)
*/
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
		
		//return the window width and page height.
		return windowWidth + 'x' + pageHeight;
	}

/**
	* @author Leonardo Collatto
	* @Descrition Get the page type (Home, Archive or Single post). Works AFTER the page load.
	* @return {string}
*/
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

/**
	* @author Leonardo Collatto
	* @Descrition Search if there is an iframe tag (and how much of it) on the page.
	* @returns {number} return the length of the array tagIframe var. 
	*
	* How it works: The function run all the document searching all the iframe html tags 
	* and return the length of it.
*/
/** Search how much of ad tags (iframe) are on the page. Works AFTER the page load.*/
function searchAdTags(){
	try {
		//get all iframes elements on the document and put it into a var (array).
		var tagIframe = document.body.getElementsByTagName('iframe');

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

/**
	* @author Leonardo Collatto
	* @Descrition Search if there is a adman tag on the page.
	* @returns {string} If there is a adman tag return 'Tem Adman' else 'Não tem Adman'
	*
	* How it works: The function run all the document searching an specific string.
	* This string its a pattern that its in every and only adman tags. Works AFTER the page load.
*/
function searchAdman(){
    //Cria um RegExp para capturar o conteúdo dentro da tag informada.
   	var admanTag = new RegExp('<script src="https://mona.admanmedia.com/(.*?)>', "g");    

    var headHTML = document.head.outerHTML;
    var bodyHTML = document.body.outerHTML;

    //--------
    var match;
    var i = 0;

      //Enquanto o código encontra a tag de prebid, ele executa este código para recuperar o conteúdo.
    if (match = admanTag.exec(headHTML)){
      	return 'Tem Adman';
    }else if(match = admanTag.exec(bodyHTML)){
    	return 'Tem Adman';
    }else{
    	return 'Não tem Adman';
    }
}

/**
	* @author Leonardo Collatto
	* @Descrition Search if there is a tail tag on the page.
	* @returns {string} If there is a tail tag return 'Tem Tail' else 'Não tem Tail'
	*
	* How it works: The function run all the document searching an specific string.
	* This string its a pattern that its in every and only tail tags. Works AFTER the page load.
*/
function searchTail(){
    //Cria um RegExp para capturar o conteúdo dentro da tag informada.
    var tailTag = new RegExp('tags.t.tailtarget.com', "g");      

    var headHTML = document.head.outerHTML;
    var bodyHTML = document.body.outerHTML;

    //--------
    var match;
    var i = 0;

    //Enquanto o código encontra a tag de prebid, ele executa este código para recuperar o conteúdo.
    if (match = tailTag.exec(headHTML)){
      	return 'Tem Tail';
    }else if (match = tailTag.exec(bodyHTML)){
      	return 'Tem Tail';
    }else{
    	return 'Não tem Tail';
    }
}

/**
	* @author Leonardo Collatto
	* @Descrition Search if there is a smartclip tag on the page.
	* @returns {string} If there is a smartclip tag return 'Tem Smartclip' else 'Não tem Smartclip'
	*
	* How it works: The function run all the document searching an specific string.
	* This string its a pattern that its in every and only smartclip tags. Works AFTER the page load.
*/
function searchSmartClip(){
    //Cria um RegExp para capturar o conteúdo dentro da tag informada.
    var smartClipTag = new RegExp('//des.smartclip.net/', "g");   

    var headHTML = document.head.outerHTML;
    var bodyHTML = document.body.outerHTML;

    //--------
    var match;
    var i = 0;

    //Enquanto o código encontra a tag de prebid, ele executa este código para recuperar o conteúdo.
    if (match = smartClipTag.exec(headHTML)){
      	return 'Tem smartclip';
    }else if (match = smartClipTag.exec(bodyHTML)){
      	return 'Tem smartclip';
    }else{
    	return 'Não tem smartclip';
    }
}

/*
	searchRevContent() error:
	Uncaught TypeError: Cannot read property 'classList' of undefined
*/

/*function searchRevContent(){
	var divElement = document.querySelectorAll("div");
	var revcontentTagLength = 0;

	for(var i = 0; i <= divElement.length; i++){
		if(divElement[i].classList.contains('rc-bl-ads-by-revcontent')){
			revcontentTagLength++;
		}	 	
	}

	return revcontentTagLength;
}*/

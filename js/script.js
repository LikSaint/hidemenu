window.onload = function() {
	var menuElements = document.getElementById("menu").children;
	hideUL(menuElements);
	function hideUL(massive) {
		var thisUL;
		for (x in massive) {
			if (massive[x].tagName == "LI"){
				if(massive[x].childElementCount==2){
					massive[x].addEventListener("mouseenter",function(){ this.getElementsByTagName("UL")[0].style.display=""; });
					massive[x].addEventListener("mouseleave",function(){ this.getElementsByTagName("UL")[0].style.display="none"; });
					thisUL = massive[x].getElementsByTagName("UL")[0];
					hideUL(thisUL.children);
					thisUL.style.display="none";
				}
			} 
		}
	}
}


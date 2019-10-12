setInterval(function(){								//to handle pagination for larger webPages
	var size = document.images.length;				//to get number of images in DOM
	for(i = 0; i < size; i++){
		var url=document.images.item(i).src;       //to get url of all images in the DOM
		console.log(url);
		// document.images[i].style.filter = "blur(5px)";
		function loadDoc() {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
		  		if (this.readyState == 4 && this.status == 200) {
				// document.getElementsByTagName("").innerHTML = this.responseText;
					selectiveBlur(this.responseText);								//function still to be written to render blurring
		  		}
			};
		xhttp.open("GET", `localhost:8080?url=${url}`, false);
		xhttp.send();
		}
	} 
},2000);

function selectiveBlur(){
	console.log("i_found_an_image");
};
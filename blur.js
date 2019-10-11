setInterval(function(){
	var size = document.images.length;
	for(i = 0; i < size; i++){
		console.log(document.images.item(i).src);
		document.images[i].style.filter = "blur(5px)";
	}
}, 2000);
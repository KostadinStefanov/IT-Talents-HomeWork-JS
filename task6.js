(function randomImg() {
	var NumberOfImagesToRotate = 5;
	var firstPart = '<img src="img/pic';
	var lastPart = '.jpg" height="200" width="300">';	
	var r = Math.ceil(Math.random() * NumberOfImagesToRotate);
	var box = document.getElementById('container');
	box.innerHTML = firstPart + r + lastPart;	 	
}());


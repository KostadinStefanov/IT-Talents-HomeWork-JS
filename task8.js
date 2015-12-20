function addRows() {
    var row = document.querySelector('body table tr');
    var cln = row.cloneNode(true);
	document.getElementsByTagName('table')[0].appendChild(cln);    
}

var button = document.getElementById('btnAddRows');
button.addEventListener('click', addRows, false);
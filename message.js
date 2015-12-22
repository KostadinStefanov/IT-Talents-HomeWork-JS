window.onload = function() {
  var selectValue = document.getElementById("selectCountry");
  selectValue.onchange = function(){
    if (selectValue.value == "Other") {
        document.getElementById("otherSelect").style.display = 'block';
    } else {
        document.getElementById("otherSelect").style.display = 'none';
    }
  }

  var allInputs = document.getElementsByClassName("registerInput");
  var allErrorLabels = document.getElementsByClassName("error");
  for (var i = 0; i < allErrorLabels.length; i++) {
    allErrorLabels[i].style.visibility = 'hidden';
  }


  var mainForm = document.getElementById("wrapper");
  var element = document.getElementById("wrapper");
  element.addEventListener("submit", function(event) {

  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value == "") {   
        event.preventDefault();
        changeColor(allInputs[i]);          
        }
    }
  });
  var changeColor = function(input) {
    input.style.background = "red";
    input.nextSibling.nextSibling.style.visibility = 'visible';
    input.onchange = function(){
      this.style.background = "white"
      this.nextSibling.nextSibling.style.visibility = 'hidden';
    }
  }  
}





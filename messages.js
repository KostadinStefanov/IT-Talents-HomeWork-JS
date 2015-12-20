
function validate(form) {
  var name = form.name.value;
  var adress = form.adress.value;
  var gender = form.gender.value;
  var message = form.message.value;
  if(!name) {
    inlineMsg('name','You must enter your name.');
    return false;
  }
  if(!adress) {
    inlineMsg('adress','<strong>Error</strong><br />You must enter your adress.');
    return false;
  }
  if(!gender) {
    inlineMsg('gender','<strong>Error</strong><br />You must select your gender.');
    return false;
  }
  if(!message) {
    inlineMsg('message','You must enter a message.');
    return false;
  }
  return true;
}

function inlineMsg(target,string) {
  var msg;
  var msgcontent;

  msg = document.createTextNode(string);
  msg.id = 'msg';
  msg.style.display = 'block';

  var targetdiv = document.getElementById(target);
  targetdiv.focus();
  targetdiv.style.backgroundColor = "red";
  targetdiv.nextSibling.innerHTML = msg
}




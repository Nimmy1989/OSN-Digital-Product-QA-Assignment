function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username == "") {
      alert("Please enter email");
      return false;
    }
    if (!username.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (password == "") {
      alert("Please enter password");
      return false;
  }
  if (username !== "" && password.length>=6 &&password.length<=10 && username.match(emailRegex)) {
    return alert("login successfull")
  }
 }
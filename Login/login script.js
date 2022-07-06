function validate() {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if (username=="Shirley"&& password=="Test") {
      alert("login successful");
      open("../Shirley present.html")
  }else if (username=="Michel"&& password=="Test") {
      alert("login successful");
      open("../michel present.html")
  }else {
      alert("login unsuccessful")
  }
}
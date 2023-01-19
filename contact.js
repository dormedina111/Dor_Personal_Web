"use strict"
function validateForm() {
  let name = document.forms["myForm"]["yourName"].value;
  let email = document.forms["myForm"]["yourEmail"].value;
  let regex=/^[a-zA-Z]+$/;
  if(name == "" || email == ""){
    alert("Must fill up all fields");
    return false;
  }
  if (!name.match(regex))
  {
      alert("Must input valid name");
      return false;
  }
}


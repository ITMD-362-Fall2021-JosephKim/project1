/*Confirm_password JS*/
function validateForm() {
    //collect form data in JavaScript variables
    var pw = document.getElementById("password").value;
    var cpw = document.getElementById("confirm_password").value;
    

    if(pw1 != pw2) {
      document.getElementById("message2").innerHTML = "**Passwords are not same";
      return false;
    } else {
      alert ("Your password created successfully");
      document.write("JavaScript form has been submitted successfully");
    }
 }
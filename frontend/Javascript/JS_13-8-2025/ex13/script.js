// Ex13 :Create a Logi form using html , css and javascript . Implement validation logic using javascript for the email and password field. Neither of them should be empty and email should be correct format. Validation checking to be done onblur of each field and for both fields when login button is clicked. Validation message to be shown right after the respective fields.

function validateEmailBlur() {
  let emailValue = document.getElementById("email").value;
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "" || !emailPattern.test(emailValue)) {
    document.getElementById("sp1").style.visibility = "visible";
  } else {
    document.getElementById("sp1").style.visibility = "hidden";
  }
}

function validatePasswordBlur() {
  let passValue = document.getElementById("password").value;
  if (passValue === "") {
    document.getElementById("sp2").style.visibility = "visible";
  } else {
    document.getElementById("sp2").style.visibility = "hidden";
  }
}

function validateOnLogin() {
  let emailValue = document.getElementById("email").value.trim();
  let passValue = document.getElementById("password").value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let emailValid = true,
    passValid = true;

  if (emailValue === "" || !emailPattern.test(emailValue)) {
    document.getElementById("emailError").style.visibility = "visible";
    emailValid = false;
  } else {
    document.getElementById("emailError").style.visibility = "hidden";
  }

  if (passValue === "") {
    document.getElementById("passError").style.visibility = "visible";
    passValid = false;
  } else {
    document.getElementById("passError").style.visibility = "hidden";
  }

  if (emailValid && passValid) {
    alert("Login successful!");
  }
}

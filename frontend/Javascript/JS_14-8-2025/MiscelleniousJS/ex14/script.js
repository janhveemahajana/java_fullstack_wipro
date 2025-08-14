function login() {
  let user = document.getElementById("username").value;

  if (user) {
    localStorage.setItem("username", user);
    console.log("User Login ", user);
  } else {
    console.log("Please enter a username");
  }
}

function logout() {
  localStorage.removeItem("username");
  console.log("User logged out");
}

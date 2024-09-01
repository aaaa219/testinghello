// Local storage code to manage the login
const rmCheck = document.getElementById("rememberMe");
const usernameInput = document.getElementById("username");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  usernameInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  usernameInput.value = "";
}

function start() {
  isRememberMe(); // Corrected function name
  page2(); // Ensure this function is called after setting remember me
}

function isRememberMe() {
  if (rmCheck.checked && usernameInput.value !== "") {
    localStorage.username = usernameInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

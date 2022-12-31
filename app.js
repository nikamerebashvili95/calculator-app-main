//// calulate
function clearScreen() {
  document.getElementById("screen").value = "";
}
// This function display values
function display(value) {
  document.getElementById("screen").value += value;
}
// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("screen").value;
  var q = eval(p);
  document.getElementById("screen").value = q;
}
function deleteValue() {
  var strng = document.getElementById("screen").value;
  document.getElementById("screen").value = strng.substring(
    0,
    strng.length - 1
  );
}

//// Change Theme
const indicator = document.querySelector(".indicator");

let theme = localStorage.getItem("theme");
const changeTheme = (themeNumber) => {
  let indicatorStyle = indicator.style;
  let rootElement = document.documentElement;
  if (themeNumber == "theme-one") {
    indicatorStyle.left = "3px";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-three", "theme-two");
    localStorage.setItem("theme", "theme-one");
  } else if (themeNumber == "theme-two") {
    indicatorStyle.left = "50%";
    indicatorStyle.transform = "translateX(-50%)";
    rootElement.classList.remove("theme-three");
    rootElement.classList.add("theme-two");
    localStorage.setItem("theme", "theme-two");
  } else {
    indicatorStyle.right = "3px";
    indicatorStyle.left = "auto";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-two");
    rootElement.classList.add("theme-three");
    localStorage.setItem("theme", "theme-three");
  }
};

changeTheme(theme);

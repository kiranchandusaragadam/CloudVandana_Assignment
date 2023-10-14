// get all buttons by query selector
let buttons = document.querySelectorAll(".button");
// make string to display over calculator screen
let str = "";

// if power button clicked then off the screen / remove content on screen
document.querySelector(".powerOn").addEventListener("click", (e) => {
  str = "";
  document.querySelector(".display").value = str;
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      str = eval(str);
    } else {
      str += e.target.innerHTML;
    }
    // whatever the value string contains diplay it on screen
    document.querySelector(".display").value = str;
  });
});

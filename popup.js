// popup.js
document.addEventListener("DOMContentLoaded", function () {
  var changeColorButton = document.getElementById("changeColor");
  changeColorButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ command: "changeColor" });
  });
});

// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.command === "changeColor") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      });
    });
  }
});

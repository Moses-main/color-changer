// chrome.action.onClicked.addListener(function (tab) {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["content.js"],
//   });
// });

// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension Installed");
});

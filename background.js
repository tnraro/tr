chrome.action.onClicked.addListener(async (tab) => {
  console.log(tab);
  if (tab.id == null) return;
  chrome.scripting.executeScript({
    files: ["content.js"],
    target: {
      tabId: tab.id,
    },
  });
});

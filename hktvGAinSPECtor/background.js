console.log('this is background');  

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: 'run'
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
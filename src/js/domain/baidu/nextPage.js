import API from	'../../API';

async function nextPage(){
	let tab = await API.getCurrentWindow();
	let tabId = tab[0].id;	
	chrome.tabs.sendMessage(tabId, {method: "doEval",string:`$('#page .n:last-child')[0].click();`}, function(data) {});

}


export default nextPage;
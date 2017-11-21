import API from	'../../API';

async function clickAd(param){
	let tab = await API.getCurrentWindow();
	let tabId = tab[0].id;

	chrome.tabs.sendMessage(tabId, {
		method: "clickAd",
		data:param
	}, function(data) {

	});
		
}

export default clickAd;

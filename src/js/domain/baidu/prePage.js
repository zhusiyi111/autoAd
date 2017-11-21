import API from	'../../API';

async function prePage(){
	let tab = await API.getCurrentWindow();
	let tabId = tab[0].id;
	console.log(tabId)
	chrome.tabs.sendMessage(tabId, {method: "doEval",string:`$('#page .n').filter(function(){return $(this).text().indexOf('上一页')!==-1})[0].click();`}, function(data) {});
		
}


export default prePage;
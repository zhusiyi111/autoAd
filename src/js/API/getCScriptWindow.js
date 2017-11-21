
export default async function(param={tabId:1}){
	return new Promise( (resolve,reject)=>{
		chrome.tabs.sendMessage(param.tabId, {method: "doEval",string:`$('#page .n:last-child')[0].click();`}, function(data) {
			resolve();
		});	
	})
}
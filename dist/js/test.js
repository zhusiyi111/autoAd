

chrome.runtime.onMessage.addListener(function(data,sender,callback){
	if(data.method==='doEval'){
		eval(data.string);
	}
	return true;
})
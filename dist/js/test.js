

chrome.runtime.onMessage.addListener(function(data,sender,callback){
	if(data.method==='doEval'){
		console.log(data)
		eval(data.string);
	}
	return true;
})


function getWindow(){
	return window;
}
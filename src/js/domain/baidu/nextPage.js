import API from	'../../API';
console.log(API)
async function nextPage(){
	let tab = await API.getCurrentWindow();
	let tabId = tab[0].id;
	let win = API.getCScriptWindow({tabId:tabId});
	console.log(win);
	$('#page .n').trigger('click');
}


export default nextPage;
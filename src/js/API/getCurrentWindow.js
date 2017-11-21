

export default function(){

	return new Promise( (resolve,reject)=>{
		chrome.tabs.query({
			active:true,
			currentWindow:true
		},function(data){
			resolve(data)
		})	
	})

} 

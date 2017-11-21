

export default function(delayTime=0){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve();
		},delayTime)
	})
}
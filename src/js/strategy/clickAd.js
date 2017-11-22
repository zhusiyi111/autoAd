import Baidu from '../domain/baidu/index'
import {getUrl,getCurrentWindow} from '../API'

export default async function(param={title:'',link:''}){
	return new Promise( async (resolve,reject)=>{
		let url = await getUrl();
		if(/www\.baidu\.com/.test(url)){
			let tab = await getCurrentWindow();
			chrome.tabs.sendMessage(tab[0].id,{
				method:'clickAd',
				data:{
					title:param.title,
					link:param.link
				}
			},function(data){
				resolve(data)
			})
		}		
	})

}
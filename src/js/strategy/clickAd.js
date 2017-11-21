

export default function(param={title:'',link:''}){
	let url = await API.getUrl();
	if(/www\.baidu\.com/.test(url)){
		Baidu.clickAd(param);
	}
}
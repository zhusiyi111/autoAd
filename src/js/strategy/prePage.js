import Baidu from '../domain/baidu/index.js'


async function prePage(){
	let url = await API.getUrl();
	if(/www\.baidu\.com/.test(url)){
		Baidu.prePage();
	}
} 

export default prePage;
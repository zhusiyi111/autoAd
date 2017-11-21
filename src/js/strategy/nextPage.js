import Baidu from '../domain/baidu/index.js'
import API from '../API/index.js'


async function nextPage(){
	let url = await API.getUrl();
	if(/www\.baidu\.com/.test(url)){
		Baidu.nextPage();
	}
} 

export default nextPage;
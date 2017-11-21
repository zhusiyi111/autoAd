import Baidu from '../domain/baidu/index.js'
import API from '../API/index.js'


async function prePage(){
	let url = await API.getUrl();
	debugger;
	if(/www\.baidu\.com/.test(url)){
		Baidu.prePage();
	}
} 

export default prePage;
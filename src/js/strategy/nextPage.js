import Baidu from '../domain/baidu/index.js'


async function nextPage(){
	let url = await getUrl();
	if(/www\.baidu\.com/.test(url)){
		Baidu.nextPage();
	}
} 

export default nextPage;
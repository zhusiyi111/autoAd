
import clickAd from './clickAd'


chrome.runtime.onMessage.addListener(function(msg,sender,callback){
	switch(msg.method){
		case 'clickAd':
			callback(clickAd(msg.data));
			break;
	}
})




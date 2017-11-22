import {mockClick} from	'../../API';


function clickAd(param={title:`宣布剿灭伊斯兰国 结果被袭击打脸 - 法律法规网`,link:`www.lc123.net/zll/shh/... `}){
	let title = $.trim(param.title),
		link = $.trim(param.link);

	var adNode = $('.c-container').filter(function(i){
		let _title = $.trim($(this).find('.t a[data-click]').text()),
			_link = $.trim($(this).find('.c-showurl').text());
		if(_title===title || _link===link){
			return true;
		}else{
			return false;
		}
	}).find('.t [data-click]');


	if(adNode.length > 0){
		mockClick(adNode[0])
		return true;
	}
	return false;
	

}

export default clickAd;


import API from '../API';
import strategy from '../strategy'

$('.J_getUrl').click(async function(){
	let a = await API.getUrl();

})

$('.J_nextPage').click(async function(){
	strategy.nextPage();
})

$('.J_prePage').click(function(){
	strategy.prePage();
})

$('.J_clickAd').click(function(){
	var link = $('.J_toUrl').val();
	strategy.clickAd({
		title:'JS中手动触发事件的方法_bdstjk_新浪博客',
		link:'blog.sina.com.cn/s/blo... '
	})
})
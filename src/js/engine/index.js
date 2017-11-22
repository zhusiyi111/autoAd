
import {getUrl} from '../API';
import {nextPage,prePage,clickAd} from '../strategy'

$('.J_getUrl').click(async function(){
	let a = await getUrl();

})

$('.J_nextPage').click(async function(){
	nextPage();
})

$('.J_prePage').click(function(){
	prePage();
})

$('.J_clickAd').click(async function(){
	var link = $('.J_link').val(),
		title = $('.J_title').val();
	var result = await clickAd({
		title:title,
		link:link
	})
	console.log(result);
})


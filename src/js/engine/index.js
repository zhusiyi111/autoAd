
import API from '../API';
import strategy from '../strategy'

$('.J_getUrl').click(async function(){
	let a = await API.getUrl();
	console.log(a);
})

$('.J_nextPage').click(function(){
	strategy.nextPage();
})
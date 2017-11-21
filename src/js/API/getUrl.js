import getCurrentWindow from './getCurrentWindow'

export default function(){
	return new Promise( async (resolve,reject) => {
		let tab = await getCurrentWindow();
		resolve(tab[0].url);
	})
}
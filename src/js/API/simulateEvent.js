function simulateMousedown(node) {
  var evt = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var canceled = !node.dispatchEvent(evt);
}


export default function(event,node){
	if(event.toLocaleLowerCase()==='mousedown'){
		simulateMousedown(node);
	}
}
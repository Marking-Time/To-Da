LS = localStorage;
Object.hasOwn(LS,"increment"); 

function initiate(){
	LS = localStorage;
	if (Object.hasOwn(LS,"increment")){
		return true
	}	
}

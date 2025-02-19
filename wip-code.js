LS = localStorage;
Object.hasOwn(LS,"increment"); 

function initiate(){
	LS = localStorage;
	if (Object.hasOwn(LS,"increment") != true){
		localStorage.setItem("increment",0);
		localStorage.setItem("ordersList","");
	}
	
	return false
}

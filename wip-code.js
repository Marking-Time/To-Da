function delete_order(){
	deleteList = localStorage.getItem("ordersList");
	deleteList = deleteList.replace(`,${updateOrderNumber}`,"");
	
	localStorage.setItem("ordersList",deleteList);
	localStorage.removeItem(updateOrderNumber);
}
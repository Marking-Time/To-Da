
// --- code for update_order ---
formUpdated = false
function is_changed(){
	if (updateCustomer != document.getElementById("compareCustomer").value) {
		formUpdated = true;
	}
	
	if (updateAssigned != document.getElementById("compareTech").value) {
		formUpdated = true;
	}
	
	if (updateStatus != document.getElementById("compareStatus").value) {
		formUpdated = true;
	}
	
	if (updateDescription != document.getElementById("compareDescription").value
		&& 
		document.getElementById("compareDescription").value != "") {
		formUpdated = true;
	}
	
	if (formUpdated == true){
		dateToAppend = date_now();
		updateDescription = updateDescription.concat('<br>',dateToAppend);
	}
return formUpdated	
}


function append() {
	if (updateCustomer != document.getElementById("compareCustomer").value) {
		updateCustomer = document.getElementById("compareCustomer").value;
		updateDescription = updateDescription.concat('<br>Customer Updated to: ',updateCustomer);
	}
	
	if (updateAssigned != document.getElementById("compareTech").value) {
		updateAssigned = document.getElementById("compareTech").value;
		updateDescription = updateDescription.concat('<br>Tech Updated to: ',updateAssigned);
	}
	
	if (updateStatus != document.getElementById("compareStatus").value) {
		updateStatus = document.getElementById("compareStatus").value;
		updateDescription = updateDescription.concat('<br>Status Updated to: ',updateStatus);
	}
	
	if (updateDescription != document.getElementById("compareDescription").value
		&& 
		document.getElementById("compareDescription").value != "") {
		textData = document.getElementById("compareDescription");	
		updateDescription = updateDescription.concat('<br>Added to Description: ',textData.value);
	}
	
}

function build() {
	is_changed();
	if (formUpdated == true){
		append();
	}	
}


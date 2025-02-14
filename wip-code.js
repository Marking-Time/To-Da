function compare(){ 
if (compareDescription == document.getElementById("compareDescription").value)
{
return true
}}

result = false
function compare() {
	if (document.getElementById("compareDescription").value != "")  {
	result = true;
	}
return result
}
// --- code for update ---
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
	
	dateToAppend = date_now();
	updateDescription = updateDescription.concat('<br>',dateToAppend);
return formUpdated	
}


function append() {}

function build() {
	is_changed();
	append();
	
	
	alert("test");
}


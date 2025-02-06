//  CRUD functions:
//  CRUD -Create

// Check to see if data in local storage
function is_Initiated() {
    if (localStorage.key('initiated')) {
        increment = localStorage.getItem('increment');
        increment = Number(increment);
        // console.log(increment);
        // return increment;
    }
}

//  Returns a string of the current date and time in local time zone
function date_now() {
    let d1 = new Date();
    d1.toUTCString();
    let d2 = d1.toString();
    d2 = d2.slice(0,21);
    return d2
}

// The following add to ordersList - CRUD-Create
// They need to called from within the save_order() function
function add_order() {
    let orderNumber = localStorage.getItem('increment');
    orderNumber = Number(orderNumber);
    orderNumber +=1;

    let orders =  localStorage.getItem('ordersList');
    orders = orders.split(',');
    orders = orders.push(orderNumber);


    return orders;
}

function save_order() {

    date = date_now();
    let orderNumber = localStorage.getItem('increment');
    orderNumber = Number(orderNumber);
    orderNumber +=1;
    
    const customer = document.getElementById("customer");
    const description = document.getElementById("description");
    const tech = document.getElementById("tech");
    const status = document.getElementById("status");
    const order = [orderNumber, date, customer.value, description.value, tech.value, status.value]; // prepend orderNumber
    localStorage.setItem(orderNumber, order);
    localStorage.setItem('increment',orderNumber);

    let order2save = [];
    order2save.push(localStorage.getItem('ordersList'));
    order2save.push(orderNumber);
    
    localStorage.setItem("ordersList",order2save);

    set_variables();

 }

//  ---- Display Data ----
// CRUD - Read
// gets data from local storage and returns an array of order numbers and displays on the index

function get_LS_ordersList() {
    getOrders = localStorage.getItem("ordersList");
    getOrders = getOrders.split(','); 
    return getOrders;
}

function set_variables() {
    getOrders = get_LS_ordersList();

    for (let i = 0; i < getOrders.length; i++) {
        // console.log(getOrders[i]);
        if (i != "0") {
            orderRow = localStorage.getItem(getOrders[i]);
            orderRow = orderRow.split(',');
            // console.log(orderRow);
            rowNumber = orderRow[0];
            rowDate = orderRow[1];
            rowCustomer = orderRow[2];
            rowDescription = orderRow[3];
            rowAssigned = orderRow[4];
            rowStatus = orderRow[5];

            display_data();
            
        }
    }

}


// ---- CRUD Update ----
//  sets display and form1 to display:none
//  returns id for button clicked
// hide_form1();
function update_functon_display(updateClicked) {
    document.getElementById("form1").style.display = "none";
    document.getElementById("hide-display").style.display = "none";
    document.getElementById("display2").style.display = "block";
    // return updateClicked;
    const updateArray = localStorage.getItem(updateClicked).split(',');
    // console.log(updateArray);
    updateOrderNumber= updateArray[0];
    updateDate= updateArray[1];
    updateCustomer= updateArray[2]; //const
    updateDescription= updateArray[3];
    updatAssigned= updateArray[4];
    updateStatus= updateArray[5];
    console.log(updateOrderNumber,updateDate,updateCustomer,updateDescription,updatAssigned,updateStatus);

//  Code to Display "order to update"
    document.getElementById("updateDisplay").innerHTML = 
    `<h3>Update Order</h3>
    <p> Order Number: ${updateOrderNumber}</p>
    <p>Date: ${updateDate}</p>
    <p>Customer: ${updateCustomer}</p>
    <p>Description: ${updateDescription}</p>
    <p>Assigned: ${updatAssigned}</p>
    <p>Status: ${updateStatus}</p>`;
	
// code to clear form2
document.getElementById("compareCustomer").value = "";
document.getElementById("compareDescription").value = "";
document.getElementById("compareTech").value = "";
document.getElementById("compareStatus").value = updateStatus; // 

// code to update LS


}

// code to compare "order to update" and form2

function compare(){
	var form2Compare = false;
	if (compareCustomer.value != ""){
		form2Compare = true;
	}
	if (compareDescription.value != ""){
		form2Compare = true;
		}
	if (compareTech.value != ""){
		form2Compare = true;
	}
	
	if (compareStatus.value != updateStatus){
		form2Compare = true;
	}
	
	if (form2Compare = true) {
		LSdescription = `<br> ${date_now()}`  // in Process 
	}
	
	
	console.log(form2Compare);
	console.log(LSdescription);
	return form2Compare
}


function update_order() {
//    console.log(alert(`${updateCustomer}, ${updateDescription}, ${updatAssigned}, ${updateStatus}`));

    compareCustomer = document.getElementById("compareCustomer").value;
    compareDescription = document.getElementById("compareDescription").value;
    compareTech = document.getElementById("compareTech").value;
    compareStatus = document.getElementById("compareStatus").value;
alert(` Customer = ${compareCustomer}, Description = ${compareDescription}, Technician Assigned = ${compareTech}, Work Order Status = ${compareStatus} `);

//code to check for changes in form2 DATA and update LS

};

//  --end update code--

function display_data() {

    const displayRow = document.createElement("div");
    displayRow.setAttribute("class", "grid-container");

// begin button
    const uButton = document.createElement("button");
    uButton.setAttribute("type","button");
    uButton.setAttribute("id",rowNumber);
    // uButton.addEventListener("onclick", some_function()); // changed click to onclick
    uButton.setAttribute("onclick","update_functon_display(this.id)");
    uButton.appendChild(document.createTextNode(rowNumber));
//end button

    const displayDate = document.createElement("p");
    const date = document.createTextNode(rowDate);
    displayDate.appendChild(date);

    const displayCustomer = document.createElement("p");
    const customer = document.createTextNode(rowCustomer);
    displayCustomer.appendChild(customer);

    const displayDescription = document.createElement("p");
    const description = document.createTextNode(rowDescription);
    displayDescription.appendChild(description);

    const displayTechnician = document.createElement("p");
    const technician = document.createTextNode(rowAssigned);
    displayTechnician.appendChild(technician);

    const displayStatus = document.createElement("p");
    const status = document.createTextNode(rowStatus);
    displayStatus.appendChild(status);

    displayRow.appendChild(uButton); // create  button
    displayRow.appendChild(displayDate);
    displayRow.appendChild(displayCustomer);
    displayRow.appendChild(displayDescription);
    displayRow.appendChild(displayTechnician);
    displayRow.appendChild(displayStatus);

    const parentDiv = document.getElementById("display").parentNode;

    const currentDiv = document.getElementById("display");
    parentDiv.insertBefore(displayRow,currentDiv);
}

//  Run
set_variables();
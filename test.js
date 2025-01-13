//  CRUD functions:
//  CRUD -Create

// Check to see if data in localstorage
function is_Initiated() {
    if (localStorage.key('initiated')) {
        increment = localStorage.getItem('increment');
        increment = Number(increment);
        console.log(increment);
        // return increment;
    }
}

//  Returns a string of the current date and time in local time zone
function date_now() {
    let d1 = new Date();
    d1.toUTCString();
    let d2 = d1.toString();
    d2 = d2.slice(0,24);
    return d2
}

// The follwing add to ordersList - CRUD-Create
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

//  
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
            console.log(orderRow);
            rowDate = orderRow[0];
            rowCustomer = orderRow[1];
            rowDescription = orderRow[2];
            rowAssigned = orderRow[3];
            rowStatus = orderRow[4];

            display_data();
            
        }
    }

}

function display_data() {

    const displayRow = document.createElement("div");
    displayRow.setAttribute("class", "grid-container");

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
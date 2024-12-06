//  CRUD functions:
//  CRUD -Create
// let initiated;
// let increment;
// let ordersList = [];
// let date;
// let customer = "User_name";
// let description = "description of problem";
// let tech = "assigned tech";
// let status = "Unassigned/In Process/Completed";
// let upate;
// let order = [];

// Check to see if data in localstorage
function isInitiated() {
    if (localStorage.key('initiated')) {
        increment = localStorage.getItem('increment');
        increment = Number(increment);
        console.log(increment);
        return increment;
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

function save_order() {

    date = date_now();
    let orderNumber = localStorage.getItem('increment');
    orderNumber = Number(orderNumber);
    orderNumber +=1;
    const customer = document.getElementById("customer");
    const description = document.getElementById("description");
    const tech = document.getElementById("tech");
    const status = document.getElementById("status")
    const order = [date, customer.value, description.value, tech.value, status.value];
    localStorage.setItem(orderNumber, order);



    // order = [orderNumber,date,customer, description, tech,];
    // localStorage.setItem(increment, order);

}

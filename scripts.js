//  CRUD functions:
//  CRUD -Create
let increment;
let ordersList = [];
let date;
let customer = "User_name";
let description = "description of problem";
let tech = "assigned tech";
let status = "Unassigned/In Process/Completed";
let upate;
let order = [];

//  Returns a string of the current date and time in local time zone
function date_now() {
    let d1 = new Date();
    d1.toUTCString();
    let d2 = d1.toString();
    d2 = d2.slice(0,24);
    return d2
}

function Create() {
    if (localStorage.key(orderIncrement)) {
        increment =  localStorage.getItem(orderIncrement);        
    } else {
        localStorage.setItem("orderIncrement","0");
        increment += 1;
    }

    date = date_now();
    order = [date,customer, description, tech,];
    localStorage.setItem(icrement, order);

}

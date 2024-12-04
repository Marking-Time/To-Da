//  CRUD functions:
//  CRUD -Create
let increment;
let ordersList = [];
let date;
let customer;
let description;
let tech;
let status;
let upate;
let order = [];

//  Returns a string of the current date and time in local time zone
function date_now() {
    let d1 = new Date();
    d1.toUTCString();
    return d1
}

function Create() {
    if (localStorage.key(orderIncrement)) {
        increment =  localStorage.getItem(orderIncrement);        
    } else {
        localStorage.setItem("orderIncrement","0");
        increment += 1;
    }



}

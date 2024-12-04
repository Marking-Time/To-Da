//  CRUD functions:
//  CRUD -Create
let increment;
let ordersList;
let date;
let customer;
let description;
let tech;
let status;
let upate;
let order = [];

function Create() {
    if (localStorage.key(orderIncrement)) {
        increment =  localStorage.getItem(orderIncrement);        
    } else {
        localStorage.setItem("orderIncrement","0");
        increment += 1;
    }


}

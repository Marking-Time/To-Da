function display_data() {
    const displayRow = document.createElement("div");

    const displayDate = document.createElement("p");
    displayDate.setAttribute("style","display:inline");
    const date = document.createTextNode("Mon Dec 16 2024");
    displayDate.appendChild(date);

    const displayCustomer = document.createElement("p");
    displayCustomer.setAttribute("style","display:inline");
    const customer = document.createTextNode("Room 248");
    displayCustomer.appendChild(customer);

    const displayDescription = document.createElement("p");
    displayDescription.setAttribute("style", "display:inline");
    const description   =   document.createTextNode("This is a description");
    displayDescription.appendChild(description);


    displayRow.appendChild(displayDate);
    displayRow.appendChild(displayCustomer);
    displayRow.appendChild(displayDescription);

    const currentDiv = document.getElementById("display");
    document.body.insertBefore(displayRow,currentDiv);
}
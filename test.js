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
    const description = document.createTextNode("This is a description");
    displayDescription.appendChild(description);

    const displayTechnician = document.createElement("p");
    displayTechnician.setAttribute("style", "display:inline");
    const technician = document.createTextNode("Unassigned");
    displayTechnician.appendChild(technician);

    const displayStatus = document.createElement("p");
    displayStatus.setAttribute("style", "display:inline");
    const status = document.createTextNode("Open");
    displayStatus.appendChild(status);

    displayRow.appendChild(displayDate);
    displayRow.appendChild(displayCustomer);
    displayRow.appendChild(displayDescription);
    displayRow.appendChild(displayTechnician);
    displayRow.appendChild(displayStatus);


    const currentDiv = document.getElementById("display");
    document.body.insertBefore(displayRow,currentDiv);
}
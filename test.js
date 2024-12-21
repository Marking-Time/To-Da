function display_data() {
    const displayRow = document.createElement("div");
    displayRow.setAttribute("class", "grid-container");

    const displayDate = document.createElement("p");
    // displayDate.setAttribute("class","grid-container");
    const date = document.createTextNode("Mon Dec 16 2024");
    displayDate.appendChild(date);

    const displayCustomer = document.createElement("p");
    // displayCustomer.setAttribute("class","grid-container");
    const customer = document.createTextNode("Room 248");
    displayCustomer.appendChild(customer);

    const displayDescription = document.createElement("p");
    // displayDescription.setAttribute("class", "grid-container");
    const description = document.createTextNode("This is a description");
    displayDescription.appendChild(description);

    const displayTechnician = document.createElement("p");
    // displayTechnician.setAttribute("class", "grid-container");
    const technician = document.createTextNode("Unassigned");
    displayTechnician.appendChild(technician);

    const displayStatus = document.createElement("p");
    // displayStatus.setAttribute("class", "grid-container");
    const status = document.createTextNode("Open");
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
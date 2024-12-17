function display_data() {
    const displayRow = document.createElement("div");

    const displayParagraph = document.createElement("p");
    const pText = document.createTextNode("this is a paragraph inserted");
    displayParagraph.appendChild(pText);

    displayRow.appendChild(displayParagraph);
    const currentDiv = document.getElementById("display");
    document.body.insertBefore(displayRow,currentDiv);
}
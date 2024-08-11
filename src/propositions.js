import { getPropositions } from "./logic.js";

const BOX = document.getElementById("propositions");
const ERRORS = document.getElementById("errors");

const resetDisplay = () => {
    BOX.innerHTML = "";
    ERRORS.innerHTML = "";
};

export const displaybox = (input) => {
    resetDisplay();
    const propositions = getPropositions(input);
    console.log("got propostions = ", JSON.stringify(propositions));
    if (propositions) {
        for (let proposition of propositions) {
            console.log(proposition);
            const item = document.createElement("button");
            item.className = "item";
            const title = document.createElement("h3");
            title.innerText = proposition.text;
            item.appendChild(title);
            const content = document.createElement("p");
            content.innerText = proposition.date.toLocaleDateString();
            item.appendChild(content);
            BOX.appendChild(item);
        }
    } else {
        ERRORS.innerText = "Invalid input";
    }
};

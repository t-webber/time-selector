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
    if (propositions) {
        for (let proposition of propositions) {
            const item = document.createElement("p");
            item.className = "item";
            item.innerText = proposition;
            BOX.appendChild(item);
        }
    } else {
        ERRORS.innerText = "Invalid input";
    }
};

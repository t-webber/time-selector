import { getPropositions } from "./logic.js";

const BOX = document.getElementById("propositions");

export const displaybox = (input) => {
    BOX.innerHTML = "";
    const propositions = getPropositions(input);
    for (let proposition of propositions) {
        const item = document.createElement("p");
        item.className = "item";
        item.innerText = proposition;
        BOX.appendChild(item);
    }
};

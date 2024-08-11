import { displaybox } from "./propositions.js";

const INPUT = document.getElementById("input");

INPUT.onkeyup = (e) => {
    if (e.key == "Enter") {
        alert("Enter !");
    } else {
        displaybox(e.target.value);
    }
};

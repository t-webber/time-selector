const BOX = document.getElementById("propositions");

export const displaybox = (input) => {
    BOX.innerHTML = "";
    for (let i = 0; i < input.length; i++) {
        const div = document.createElement("div");
        div.className = "item";
        div.innerText = "Hello Worldy";
        BOX.appendChild(div);
    }
};

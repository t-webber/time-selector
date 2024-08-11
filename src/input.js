const INPUT = document.getElementById("input");

INPUT.onkeyup = (e) => {
    if (e.key == "Enter") {
        alert("Enter !");
    } else {
        console.log(e.target.value);
    }
};

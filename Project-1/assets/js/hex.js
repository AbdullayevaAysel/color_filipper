const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
let color = document.getElementById("color");

btn.addEventListener("click", () => {
    let colorName = "#";
    for (var i = 0; i < 6; i++) {
        colorName += colors[randomNumber()];
    }

    document.querySelector("main").style.backgroundColor = colorName;
    color.textContent = colorName;
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
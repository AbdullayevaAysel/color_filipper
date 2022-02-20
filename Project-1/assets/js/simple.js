const colors = ["red", "green", "yellow", "blue", "violet"];
const btn = document.querySelector(".btn");
let color = document.getElementById("color");

btn.addEventListener("click", () => {
    const randnum = randomNumber();

    document.querySelector("main").style.backgroundColor = colors[randnum];
    color.textContent = colors[randnum];
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
let moves = document.querySelectorAll(".sbox");

moves.forEach(move => {
    move.addEventListener("click", () => {
        alert("Game is In Progress...!");
        move.innerText="Help...? :D";
    });
});

let modebtn = document.querySelector("#c_btw");
let body = document.querySelector("body");
let cmode = "light";
modebtn.addEventListener("click", () => {
    if (cmode === "light") {
        cmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        cmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
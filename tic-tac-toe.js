let moves = document.querySelectorAll(".sbox");

moves.forEach(move => {
    move.addEventListener("click", () => {
        alert("Game is In Progress...!");
        move.innerText="Help...? :D";
    });
});

function clk() {
    alert("Hello world!");
    let num = prompt("Enter a number: ");
    if (num % 3 === 0) {
        alert(`${num} is multiple of 3`);
    } else {
        alert(`${num} is not a multiple of 3`);
    }
}
function b_clk() {
    let foo = document.querySelector(".foo");
    foo.innerText = "<b>Dom is DOM. But js is fun...</b>";
}
var btw = document.getElementById("a_btw");
btw.addEventListener("click", clk);
var btw = document.getElementById("b_btw");
btw.addEventListener("click", b_clk);
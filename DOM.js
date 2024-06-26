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
    foo.innerText = "Dom is DOM. But js is fun...";
    let hide = document.querySelector("#hide");
    hide.style.visibility = "visible";
    setTimeout(function () {
        hide.style.visibility = "hidden";
    }, 3000);
}
function new_btn() {
    let btn = document.createElement("button");
    btn.innerText = "Click Me!";
    let div = document.querySelector("#con");
    div.appendChild(btn);
}
var btw = document.getElementById("a_btw");
btw.addEventListener("click", clk);
var btw = document.getElementById("b_btw");
btw.addEventListener("click", b_clk);
// new_btn();

let ev = document.querySelector("#e_btw");
ev.addEventListener("click", () => {
    alert("Event Handler... Button was Clicked.");
});

let modebtn = document.querySelector("#c_btw");
let body = document.querySelector("body");
let cmode = "light";
/*modebtn.addEventListener("click", () => {
    if (cmode === "light") {
        cmode = "dark";
        document.querySelector("body").style.backgroundColor = "rgb(23, 0, 44)";
        document.querySelector("body").style.color = "azure";
    } else {
        cmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
});
*/
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

let newModebtn = document.querySelector(".button");
newModebtn.addEventListener("click", () => {
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

let code = document.querySelector(".button-1");
code.addEventListener("click", code_alert);
function code_alert() {
    alert(`
    HTML:
    <div style="display: flex; justify-content: center; align-items: center; width: auto; ">
        <button class="button-1">
            <span class="bracket left">❴</span>
            <span class="text">Code</span>
            <span class="bracket right">❵</span>
        </button>
    </div>
    `);
}
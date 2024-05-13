console.log("1");
console.log("2");
setTimeout(() => {
    console.log("Hello...");
}, 1000);
console.log("3");
console.log("4");
setTimeout(() => {
    console.log("Hello...!");
}, 1000);

function getData(dataId) {
    setTimeout(() => {
        console.log("Data: ", dataId);
    }, 2000);
}

getData(1);
getData(2);
getData(3);
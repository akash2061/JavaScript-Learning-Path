// console.log("1");
// console.log("2");
// setTimeout(() => {
//     console.log("Hello...");
// }, 1000);
// console.log("3");
// console.log("4");
// setTimeout(() => {
//     console.log("Hello...!");
// }, 1000);

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("Data: ", dataId);
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am Promise.");
        resolve("Success.");
    });
};
let getPromiseReject = () => {
    return new Promise((resolve, reject) => {
        console.log("I am Promise.");
        reject("Error Occured.");
    });
};
let call = getPromise();
let call2 = getPromiseReject();

call.then((res) => {
    console.log(res);
});
call2.catch((err) => {
    console.log(err);
});

function api(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async/Await -", i);
            resolve("Success.");
        }, 2000);
    });
};

async function getAPIData() {
    await api(`Foo... ${api()}`);
    console.log("Getting Data - 1...");
    await api(1);
    console.log("Getting Data - 2...");
    await api(2);
    console.log("Getting Data - 3...");
    await api(3);
    console.log("Getting Data - 4...");
    await api(4);
}
getAPIData();

// IIFE => Instant Code Execution...
// (async function () {
//     console.log("IIFE => Getting Data - 1...");
//     await api(1);
//     console.log("IIFE => Getting Data - 2...");
//     await api(2);
//     console.log("IIFE => Getting Data - 3...");
//     await api(3);
//     console.log("IIFE => Getting Data - 4...");
//     await api(4);
// })();
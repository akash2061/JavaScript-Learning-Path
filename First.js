console.log("Hi");
console.error("Error");
console.warn("Warning");

let a = 10;
console.log(a);
a = 20;
console.log(a);

const b = 30;
console.log(b);

console.log("a + b = ", a + b);

console.log(typeof a);

const x = "Hi";
console.log(typeof x);

const name = "Johan Libert";
const age = 23;

console.log("Name " + name + " & age " + age);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0, 5));
console.log(name.substring(0, 5).toUpperCase());
console.log(name.split(" "));

const list = "Name, Age, E-mail, Github";
console.log(list.split(", "));

//comments

const array = ["apple", "name", 10, 40.04];
console.log(array);
console.log(array[3]);

array[4] = true;
console.log(array);

array.push(false); //add element in array
console.log(array);

array.unshift(false); //add element to 0 index
console.log(array);

array.pop(); //remove last element of array
console.log(array);

console.log(array.indexOf("name"));

//object literals

const person = {
    Name: "VS Code",
    Age: 2,
    address: {
        path: "C:\\ program file\\ nodejs",
        more: "JavaScript is Fun...!",
    },
    arr: ["Hello", "Bye", "Hi"],
};

console.log(person);
console.log(person.Age, person.address);
console.log(person.arr[1]);
console.log(person.address.more);

const {
    Name,
    Age,
    address: { path },
} = person;
console.log(Name + " " + Age + " " + path);

person.email = "vscode@google.com";
console.log(person);

const todo = [
    {
        id: 1,
        text: "1st todo",
        completed: true,
    },
    {
        id: 2,
        text: "2nd todo",
        completed: false,
    },
    {
        id: 3,
        text: "3rd todo",
        completed: true,
    },
];

console.log(todo);
console.log("3 = " + todo[2].text);

console.log(todo[1].text.split(" "));

const todoJSON = JSON.stringify(todo); //to  send data to server in json
console.log(todoJSON);

//loops

for (let i = 0; i < todo.length; i++) {
    console.log("ToDo: " + i);
    console.log(todo[i]);
}

for (let t of todo) {
    console.log(t.id, t.text);
}

// High order array methods:   forEach, map, filter
console.log("\nFor Each: <id>");
todo.forEach(function (t) {
    console.log(t.id);
});
console.log("\nFor Each: <full>");
const foo = todo.forEach(function (t) {
    console.log(t);
});
console.log();
console.log("For Each Stored => " + foo);

console.log("\nMap:");
const next = todo.map(function (t) {
    return t.text;
});

console.log(next);
console.log("\nMap Full:");
const next1 = todo.map(function (t) {
    return t;
});

console.log(next1);
console.log("\nFilter:");

const filteredTodo = todo.filter(function (t) {
    return t.completed;
});

console.log(filteredTodo);

const z = "10"; // === is to match the type
if (z === 10) {
    console.log(z);
} else {
    console.log("z is string === " + z);
}

z == 10 ? console.log("True") : console.log("False");

const color = ["Red", "Blue", "Green"];

const randomindex = Math.floor(Math.random() * color.length);
const randomelement = color[randomindex];

switch (randomelement) {
    case "Red":
        console.log("Color Red");
        break;
    case "Blue":
        console.log("Color Blue");
        break;
    case "Green":
        console.log("Color Green");
        break;
    default:
        console.log("Error");
        break;
}

function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2));

// oops in .js
// Constructor Function
/*
function Person(firstname, lastname, dob) {
    this.firstName = firstname;
    this.lastname = lastname;
    this.dob = dob;
}
// Instantiate object
const person1 = new Person("John", "Pol", "15-6-2022");
console.log(person1);

Person.prototype.fullname = function () {
    return this.firstName + " " + this.lastname;
};
console.log(person1.fullname());
*/
//class
class Persons {
    constructor(firstname, lastname, dob) {
        this.firstName = firstname;
        this.lastname = lastname;
        this.dob = dob;
    }
    fullname() {
        return this.firstName + " " + this.lastname;
    }
}
const person1 = new Persons("John", "Pol", "15-6-2022");
console.log(person1.fullname());

x_null = null;
x_undef = undefined;

console.log(x_null);
console.log(x_undef);

c = 2;

console.log("A = ", a);
console.log("C = ", c);

console.log("C % A = ", c % a);
console.log("A ^ C = ", a ** c);

console.log("A = C? ", a === c);
console.log("A != C? ", a !== c);
console.log("A = X (x is a string) ? ", a === x);

let mode = "Dark";
if (mode === "dark") {
    console.log("dark mode is on...!");
} else if (mode === "Dark") {
    console.log("Dark mode is on...!");
} else {
    console.log("Foo...\nDark is dark...?");
}

let result = a === c ? "Dark" : "Dark is a string";
console.log(result);

// alert("Hellooo......!");
// let num = prompt("Enter a number: ");
// if (num % 3 === 0) {
//     console.log(num," is multiple of 3");
// }else{
//     console.log(num," is not a multiple of 3");
// }

let s = "JavaScript";
console.log("\nIterator:");

for (let i of s) {
    console.log("I = ", i);
}

console.log("\nFor in:");
for (let key in person) {
    console.log("Key = ", key, "\t| Value = ", person[key]);
}

console.log("\nTemplate Literal:");
let obj = {
    item: "Pen",
    price: 10,
};
let op = `Cost of ${obj.item} is ${obj.price}.`;
console.log(op);

console.log("Output Length:", op.length);
console.log("Output to Upper:", op.toUpperCase());
console.log("Output to Lower:", op.toLowerCase());

let new_op = `      Cost of ${obj.item} is ${obj.price}.         `;
console.log("Output Trim:", new_op.trim());

console.log("Sliced:", op.slice(6, 13));
console.log("Sliced:", op.slice(8));

let s1 = "Hello";
let s2 = " Foo...";
// let s3 = s1 + s2;
let s3 = s1.concat(s2);
console.log("\nConcat:", s3);

console.log("Concat Replace:", s3.replace("o", "O"));
console.log("Concat ReplaceAll:", s3.replaceAll("o", "O"));

console.log("\nChar at 6:", s3.charAt(6));

let usrname = "Morningstar";
console.log("\nName:", usrname);
console.log("User Name:", "@" + usrname + usrname.length);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["10", 20, '30', 40];

let arr3 = arr1.concat(arr2);
console.log("Concat Array:", arr3);
arr3 = arr3.slice(4, 7);
console.log("Sliced Array:", arr3);
arr4 = [1, 2, "3", 4, 5];
console.log("\nArray:       ", arr4);
arr4.splice(1, 3, "2", 3, "4");
console.log("Splice Array:", arr4);

console.log("\nArray-1:                ", arr1);
arr1.splice(2, 1);
console.log("Removing 3 from Array-1:", arr1);

console.log();
let count = 1;
function Foo() {
    console.log(`${count} - Foo from function.`);
    count++;
}

for (let l = 0; l < 5; l++) {
    Foo();
}

console.log();
function sum(f, g) {
    // console.log("Hello Function!");
    return f + g;
};
console.log(sum);
console.log("Sum of string & Num:", sum("foo-", 200));
console.log("Sum of 2 numbers:", sum(300, 200));
console.log();

const arrow_sum = (f, g) => {
    return f + g;
};
console.log(arrow_sum);
console.log(arrow_sum('foo', 200));

console.log("\nFor Each:");
let arr = [1, 2, 3, 4, 5];
arr.forEach(function val(value, v, arr) {
    console.log(value, "-", v, "-", arr);
});
console.log();
let sarr = ["a", "b", "c", "d", "e"];
sarr.forEach((val, index, arr) => {
    console.log(val, "-", index, "-", arr);
});

console.log("\nMap:");
let map_arr = ["a", 10, "b", 20, "c", 30];
map_arr.map((val, i, arr) => {
    console.log(val, "-", i, "-", arr);
});

let new_map = map_arr.map((val) => {
    if (typeof val === "string") {
        return val;
    } else {
        return val * 2;
    }
});

console.log("\nnew_map:", new_map);

let char = map_arr.filter((val) => {
    if (typeof val === "string") {
        return val;
    }
});
console.log("\nFiltered Map:", char);
let val = map_arr.filter((val) => {
    if (typeof val === "number") {
        return val;
    }
});
console.log("Filtered Map:", val);

console.log("\nReduce:");
let arr_mul = arr.reduce((pre, curr) => {
    console.log(pre, "*", curr);
    return pre * curr;
});
console.log("Reduce-Multiply:", arr_mul);
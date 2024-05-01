console.log("Hi");
console.error("Error");
console.warn("Warning");

let a = 10;
console.log(a);
a = 20;
console.log(a);

const b = 30;
console.log(b);

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

todo.forEach(function (t) {
    console.log(t.id);
});

const next = todo.map(function (t) {
    return t.text;
});

console.log(next);

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

console.log(x_null)
console.log(x_undef)
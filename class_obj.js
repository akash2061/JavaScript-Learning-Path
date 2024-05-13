const Student = {
    name: "Morningstar_2061",
    marks: 95.7,
    printMarks: function () {
        console.log("Marks = ", this.marks)
    },
};

const field = {
    fieldName: "Cybersecurity",
};

Student.__proto__ = field;

console.log(Student);
console.log(Student.fieldName);

class Car {
    constructor(brand) {
        console.log("It's a Car Constructor...");
        this.brand = brand;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}

let porsche = new Car("Porsche");
// porsche.setBrand();
porsche.start();
porsche.stop();
console.log(porsche);
let lotus = new Car();
console.log(lotus);

try {
    console.log(name);
    console.log(fieldName);
} catch (err) {
    console.log(err);
}
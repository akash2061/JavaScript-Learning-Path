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
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let porsche = new Car();
porsche.setBrand("Porsche");
porsche.start();
porsche.stop();
console.log(porsche);
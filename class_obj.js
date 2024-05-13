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
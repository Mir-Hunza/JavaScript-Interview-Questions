// Question No.20 "Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades."

const student = {
  name: "John Doe",
  age: 20,
  grades: [85, 90, 92, 88, 95],

  calculateAverage: function() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / this.grades.length;
    return average;
  }
};

console.log(`Student Name: ${student.name}`);
console.log(`Student Age: ${student.age}`);

const averageGrade = student.calculateAverage();
console.log(`Average Grade: ${averageGrade}`);


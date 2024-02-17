// Question No.30 "How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?"

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 }
];

const adjustedScores = students.map((student) => {
  return {
    name: student.name,
    adjustedScore: student.score + 5
  };
});

console.log(adjustedScores);



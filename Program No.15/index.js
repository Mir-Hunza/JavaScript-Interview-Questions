// Question No.15 "Determine if a year is a leap year or not."

function isLeapYear(year) {
  if (typeof year !== 'number' || isNaN(year)) {
    return "Invalid input. Please provide a valid year.";
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

let testYear = 2024;
let result = isLeapYear(testYear);
console.log(result);

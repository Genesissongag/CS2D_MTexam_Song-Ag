// Collecting user information
let subjectTitle = prompt("Please enter the subject title:");
let classSchedule = prompt("Please enter the class schedule (Time, Days):");
let classroom = prompt("Please enter the classroom:");
let classInstructor = prompt("Please enter the class instructor's name:");
let studentName = prompt("Please enter your name:");

// Log all collected information to the console
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);

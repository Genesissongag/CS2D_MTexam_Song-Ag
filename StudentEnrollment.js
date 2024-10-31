// Student Enrollment
let DSA = [];
let PL = [];
let Networks = [];

function enrollStudent(subjectArray, subjectName) {
    let studentName = prompt(`Enter the name of the student to enroll in ${subjectName}:`);
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled in ${subjectName}.`);
}

function unenrollStudent(subjectArray, subjectName) {
    if (subjectArray.length === 0) {
        console.log(`No students are currently enrolled in ${subjectName}.`);
        return;
    }
    console.log(`Currently enrolled students in ${subjectName}:`, subjectArray);
    let studentName = prompt(`Enter the name of the student to unenroll from ${subjectName}:`);
    let index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log(`${studentName} has been unenrolled from ${subjectName}.`);
    } else {
        console.log(`${studentName} is not enrolled in ${subjectName}.`);
    }
}

function selectSubject() {
    let subjectChoice = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks").toUpperCase();
    let subjectArray;
    let subjectName;

    switch (subjectChoice) {
        case 'A':
            subjectArray = DSA;
            subjectName = "DSA";
            break;
        case 'B':
            subjectArray = PL;
            subjectName = "PL";
            break;
        case 'C':
            subjectArray = Networks;
            subjectName = "Networks";
            break;
        default:
            console.log("Invalid choice. Please select a valid subject.");
            return;
    }

    let operationChoice;
    do {
        operationChoice = prompt(`Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit`).toUpperCase();
        switch (operationChoice) {
            case 'A':
                enrollStudent(subjectArray, subjectName);
                break;
            case 'B':
                unenrollStudent(subjectArray, subjectName);
                break;
            case 'C':
                return; // Go back to subject to select more operation
            case 'D':
                console.log("Exiting the program...");
                console.log("DSA Students:", DSA);
                console.log("PL Students:", PL);
                console.log("Networks Students:", Networks);
                return; // Exit the program
            default:
                console.log("Invalid choice. Please select a valid option.");
        }
    } while (true);
}

// Start the enrollment process
selectSubject();

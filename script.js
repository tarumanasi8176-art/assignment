console.log("Hello, World!");

let name = "Manasi";
let marks = 85;
let atendance = 90;
let department = "Computer Science";

console.log("name:",name);
console.log("marks:",marks);
console.log("atendance:",atendance);
console.log("department:",department);

//if else statement
if (marks >= 35){
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

//if else if statement
if (marks >= 90) {
    console.log("Grade: A+");
}
else if (marks >= 75) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else if (marks >= 35) {
    console.log("Grade: C");
}
else {
    console.log("Grade: Fail");
}

//switch case statement
switch (department) {
    case "Computer Science":
        console.log("Department: Computer Science");
        break;
    case "Information Technology":
        console.log("Department: Information Technology");
        break;
    case "Computer Engineering":
        console.log("Department: Computer Engineering");
        break;
    case "Mechanical Engineering":
        console.log("Department: Mechanical Engineering");
        break;
    default:
        console.log("Another Department");
    }

    //ternary operator
    let attendanceStatus = (atendance >= 75) ? "Eligible for Exam": "Not Eligible for Exam";
    console.log(attendanceStatus);

    //for loop
    for (let i = 1; i <= 20; i++) {
        console.log("i:", i);
    }

    //while loop
    let i = 2;
    while (i <= 20) {
        console.log("i:", i);
        i += 2;
    }

    //do while loop
    let n = 10;
    do {
        console.log("n:", n);
        n--;
    } while (n >= 0);

    //break and continue statement
    for (let i = 1; i <=20; i++){
        
        if (i == 15){
            break;
        }
        console.log("i:", i);
    }
    //continue statement
    for (let i = 1; i <=20; i++){
        if (i % 3 === 0){
            continue;
        }
        console.log("i =",i);
    }   
    
    
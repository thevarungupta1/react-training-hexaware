const employee = {
    empId : 1,
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmai.com'
}

// let empId = employee.empId;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// destructuring
let { empId, email, lastName } = employee;

console.log(empId);
//console.log(firstName)
console.log(lastName)
console.log(email)

function getScores(){
    return [70, 80, 90];
}

let scores = getScores();
console.log(scores);
// let x = scores[0];
// let y = scores[1];
// let z = scores[2];

// destructing
let [x, y, z] = getScores();
console.log(x);
console.log(y);
console.log(z);
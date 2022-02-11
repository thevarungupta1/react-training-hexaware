// class Employee{
//     firstName;
//     lastName;

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

class Employee{
    

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let employee = new Employee('John', 'Rangel');
employee.getFullName();
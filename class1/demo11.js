// class Person{
//     firstName;
//     lastName;

//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let person = new Person();
// person.firstName = 'Mark';
// person.lastName = 'Paul';

// person.getFullName();

let Person =  class {
    firstName;
    lastName;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
let person2 = new Person();
person2.firstName ='Mark';
person2.lastName = 'Smith';
person2.getFullName();


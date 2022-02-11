import React from 'react';

const Employee = (props) => {
    // const id = props.id;
    // const name = props.name;
    // const email = props.email;
    const { id, name, email } = props;
    return (
        <div>
            {/* <h1>EmpId: { props.id }, Name: {props.name}, Email: {props.email}</h1> */}
            <h1>EmpId: { id }, Name: {name}, Email: {email}</h1>
        </div>
    )
}
export default Employee;
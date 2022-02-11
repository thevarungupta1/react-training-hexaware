import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const employeeData = [
    { id: 1, name: "Mark", email: "m@gmail.com", age: 30 },
    { id: 2, name: "Paul", email: "p@gmail.com", age: 40 },
    { id: 3, name: "Watson", email: "w@gmail.com", age: 50 },
    { id: 4, name: "John", email: "j@gmail.com", age: 60 },
    { id: 5, name: "Stacy", email: "s@gmail.com", age: 60 },
  ];

  return (
    <div>
      <h1 className="text-center">All Employees</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((emp) => <Employee data={emp} />  )}
        </tbody>
      </table>
    </div>
  );
};
export default Employees;

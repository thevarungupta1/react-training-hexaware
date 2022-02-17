import React, { useState } from "react";

const FormDemo = () => {
  const [name, setName] = useState("");

  function onChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Form Demo</h1>
      <h1>{name}</h1>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          className="form-control"
        />
      </div>
    </div>
  );
};
export default FormDemo;

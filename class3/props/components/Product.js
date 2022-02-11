import React from "react";

const Product = (props) => {
    const {pid, name, mrp, price} = props;
  return (
    <tr>
      <td>{ pid }</td>
      <td>{ name }</td>
      <td>{ mrp }</td>
      <td>{ price }</td>
    </tr>
  );
};
export default Product;

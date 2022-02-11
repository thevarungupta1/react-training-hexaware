import React from 'react';
import Product from './Product';

const ProductList = () => {
    return (
        <div>
            <h1 className="text-center">All Products</h1>
            <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Pid</th>
                    <th>Name</th>
                    <th>Mrp</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
               <Product pid="1" name="Laptop" mrp="10000" price="9000" />
               <Product pid="2" name="Desktop" mrp="10000" price="9000" />
               <Product pid="3" name="Mobile" mrp="10000" price="9000" />
               <Product pid="4" name="Table" mrp="10000" price="9000" />
            </tbody>
        </table>
        </div>
    )
}
export default ProductList;
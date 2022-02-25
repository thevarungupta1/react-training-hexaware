import React from "react";
import Navbar from "../../components/Navbar";
import SubCategoryList from "../../components/SubCategoryList";
import ProductList from "../../components/ProductList";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SubCategoryList />
          </div>
          <div className="col-lg-9">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;

import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import productService from "../api/product/product";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await productService.getAllProducts();
    // console.log("DATA => ", data);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" flex justify-around ">
      <div className=" w-[20%] m-2 border-x-2">
        <Filter products={products} setProducts={setProducts} />
      </div>
      <div className=" w-[80%] m-2">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductsComponent;

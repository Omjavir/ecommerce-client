import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../api/product/product";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log("ID => ", id);

  const getProducts = async () => {
    const { data } = await productService.getProductsByCategory(id);
    // console.log("DATA => ", data);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product._id} className="w-[25%]">
            <Card
              name={product.name}
              price={product.price}
              imgUrl={product.image.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;

import React, { useState } from "react";

const Filter = ({ products, setProducts }) => {
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setProducts(sortedProducts);
    console.log("SORTED => ", sortedProducts);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <label className="mr-2 font-semibold">Sort by price:</label>
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

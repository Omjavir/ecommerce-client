import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface Category {
  _id: string;
  name: string;
}

const Category = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/v1/category`);
    setCategories(data.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div>
        <h1 className="m-3 p-5 font-bold text-3xl">Shop by Category</h1>
      </div>
      <div className="flex m-4 flex-wrap">
        {categories?.map((category: Category) => (
          <div key={category._id} className="">
            <Link to={`products/category/${category._id}`}>
              <Button title={category.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

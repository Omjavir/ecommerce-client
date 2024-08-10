import { addToCart } from "../store/cartSlice";
import Button from "./Button";
import { useDispatch } from "react-redux";

const Card = ({
  name,
  price,
  imgUrl,
  category,
}: {
  name: string;
  price: number;
  imgUrl: string;
  category: string;
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, imgUrl, category }));
  };

  return (
    <div className="rounded overflow-hidden shadow-lg m-4   p-2">
      <img className="w-full" src={imgUrl} alt={name} />
      <div className="px-2 py-2">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {category}
        </span>

        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div>
        <div onClick={handleAddToCart}>
          <Button title="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;

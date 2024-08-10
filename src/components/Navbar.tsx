import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);

  let len = items.length;

  return (
    <div className="flex justify-between m-3 p-2">
      <div>
        <Link to="/">
          <h1 className="font-bold text-4xl">E-Commerce Store</h1>
        </Link>
      </div>
      <div>
        <Link to={`cart`}>
          <Button title={`Cart ${len}`} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

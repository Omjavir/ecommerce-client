// src/components/Cart.js
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../store/cartSlice";
import Navbar from "../components/Navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(changeQuantity({ id, quantity }));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <Navbar />
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-semibold">Cart</h2>
        {items.length === 0 ? (
          <p className="font-medium flex justify-center">Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    <span className="font-bold">{item.name}</span> - $
                    {item.price} x{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      min="1"
                      className="w-12 text-center border rounded"
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="text-xl mt-4">Total: ${totalAmount.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

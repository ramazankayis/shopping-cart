/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MyContext } from "../context/MyContext";
const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const { myState, setMyState } = useContext(MyContext);
  return (
    <div>
      <div className="relative">
        <FiShoppingCart
          className="text-2xl"
          onClick={() => setMyState("kayış")}
        />
        {myState}
        {cart.length > 0 && (
          <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartIcon;

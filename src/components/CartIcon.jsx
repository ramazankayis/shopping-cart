/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = ({ cart }) => {
  return (
    <div>
      <div className="relative">
        <FiShoppingCart className="text-2xl" />
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

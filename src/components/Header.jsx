/* eslint-disable react/prop-types */
import CartIcon from "./CartIcon";

// eslint-disable-next-line no-unused-vars
const Header = ({cart}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind CSS Sepet Uygulaması
      </h1>
      <CartIcon cart={cart} />
    </div>
  );
};

export default Header;

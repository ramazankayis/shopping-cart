/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { MyProvider } from "./context/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MyProvider>
  </React.StrictMode>
);

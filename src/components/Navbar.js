import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="">
      <div className="nav-center">
        <h3>Redux Shoping</h3>
        <div className="nav-container">
          ロゴ
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

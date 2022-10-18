import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/shopping-bag.svg";
import CartIcon from "../images/shopping-cart.svg";
import LoginIcon from "../images/user.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <div className="flex">
            <img className="mr-2 w-6" src={Logo} alt="icon" />
            <h2 className="nav-head">E-Commerce</h2>
          </div>
        </Link>
        <div className="flex justify-between w-48">
          <div className="flex cursor-pointer">
            <img className="mr-2 w-5" src={CartIcon} alt="icon" />
            <h2 className="nav-head">Cart</h2>
          </div>
          <Link to={"/login"}>
            <div className="flex cursor-pointer">
              <img className="mr-2 w-5" src={LoginIcon} alt="icon" />
              <h2 className="nav-head">Login</h2>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

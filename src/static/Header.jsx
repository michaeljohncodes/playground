import React from "react";
import Username from "../components/reuseable/Username";
import Age from "../components/reuseable/Age";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-10 pl-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;

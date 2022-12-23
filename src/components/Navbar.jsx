import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";

const Navbar = () => {
  const { setQuery } = useAppContext();

  return (
    <div className="navbar">
      <div>
        <h1>Books Application</h1>
      </div>
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorite Books</h3>
        </Link>
      </div>
      <div className="search-btn">
        <input
          type="text"
          placeholder="Search Book..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;

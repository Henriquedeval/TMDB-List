import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return ;
    }
    
    navigate(`/search?q=${search}`);
 setSearch('')
  };

  return (
    <>
      <div className="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            MovieList
          </Link>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movie"
            onChange={(e) => setSearch(e.target.value) }
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;

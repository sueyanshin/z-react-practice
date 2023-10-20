import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();
  const [isDarkMode, setDarkMode] = useState("false");
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);

    document.body.setAttribute("data-bs-theme", isDarkMode ? "light" : "dark");
  };
  if (location.pathname !== "/")
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top shadow mb-3">
          <div className="container">
            <a className="navbar-brand" href="/home">
              Food Guide
            </a>
            <div className="btn btn-white" onClick={toggleDarkMode}>
              {isDarkMode === true ? (
                <MdDarkMode className="text-white fs-3" />
              ) : (
                <MdOutlineDarkMode className="text-white fs-3" />
              )}
            </div>
          </div>
        </nav>
      </>
    );
};

export default NavBar;

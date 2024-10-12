import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  //  toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newDarkModeState = !prev;

      // Update localStorage
      localStorage.setItem("theme", newDarkModeState ? "dark" : "light");

      return newDarkModeState;
    });
  };
  return (
    <div>
      <div className="navbar z-50 fixed top-0 bg-base-100 dark:bg-gray-800">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl dark:text-white">
            ROYAL TEAK
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal font-medium px-1">
            <li>
              <Link to={"/cart"} className="dark:text-white">
                Cart ( 3 )
              </Link>
            </li>
            <li>
              <details>
                <summary className="dark:text-white">kavin</summary>
                <ul className="bg-base-100 dark:bg-gray-700 rounded-t-none p-2">
                  <li>
                    <button
                      className="dark:text-white "
                      onClick={toggleDarkMode}
                    >
                      {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                  </li>
                  <li>
                    <a className="dark:text-white">Profile</a>
                  </li>
                  <li>
                    <a className="dark:text-white">Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

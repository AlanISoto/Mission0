import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Info</a>
              <ul className="p-2">
                <li>
                  <a>Our Story</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Reservations</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Poco Loco</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Menu</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Info</summary>
              <ul className="p-2">
                <li>
                  <a>Our History</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Reservations</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact Us</a>
      </div>
    </div>
  );
}

export default NavBar;

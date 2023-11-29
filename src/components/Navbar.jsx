import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="navbar max-h-10 top-0 bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-warning lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <a>Work Experience</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Notable Projects</a>
              <ul className="p-2">
                <li>
                  <a>Car Performance Simulator</a>
                </li>
                <li>
                  <a>Would You Survive the Titanic?</a>
                </li>
                <li>
                  <a>Local Media Server</a>
                </li>
                <li>
                  <a>Gang of Four Patterns in Java</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          About Tyler
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/work-experience">Work Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Notable Projects</summary>
              <ul className="p-2">
                <li>
                  <a>Car Performance Simulator</a>
                </li>
                <li>
                  <a>Would You Survive the Titanic?</a>
                </li>
                <li>
                  <a>Local Media Server</a>
                </li>
                <li>
                  <a>Gang of Four Patterns in Java</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/TylerJDav">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faGithub} />
            My GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

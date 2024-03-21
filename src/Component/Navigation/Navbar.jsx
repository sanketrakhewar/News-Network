import React from "react";
import "./style.css";
function Navbar({ setCategory }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand" onClick={() => setCategory("general")}>
            <span className="badge bg-light text-dark fs-5 px-3">
              News Network
            </span>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link px-3"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link px-3"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link px-3"
                  onClick={() => setCategory("health")}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link px-3"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link px-3"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
